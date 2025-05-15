"use client";

import type * as React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

// Support for multi-level nesting
interface BaseOption {
  value: string;
  label: string;
  hasSubmenu?: boolean;
  subOptions?: BaseOption[];
}

interface Option extends BaseOption {
  icon?: React.ReactNode;
}

interface CustomSelectProps {
  options: Option[];
  placeholder: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function CustomSelect({
  options,
  placeholder,
  icon,
  value,
  onChange,
  className,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [expandedSubOption, setExpandedSubOption] = useState<string | null>(
    null
  );
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
    setIsOpen(false);
    setHoveredOption(null);
    setExpandedSubOption(null);
  };

  const toggleSubOptionExpand = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedSubOption(
      expandedSubOption === optionValue ? null : optionValue
    );
  };

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setHoveredOption(null);
        setExpandedSubOption(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={cn("relative", className)} ref={selectRef}>
      {/* Select trigger */}
      <button
        type="button"
        className={cn(
          "h-11 flex items-center justify-between w-full px-4 py-2 text-left border rounded-md focus:outline-none",
          isOpen ? "border-primary" : "border-Gray200",
          "bg-white"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Coffee className="w-4 h-4 text-Gray600" />
          <span className="text-xs text-Gray700">
            {selectedOption?.label || placeholder}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-Gray600",
            isOpen && "transform rotate-180"
          )}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option.value}
                className="relative"
                onMouseEnter={() => setHoveredOption(option.value)}
                onMouseLeave={() => setHoveredOption(null)}
              >
                <div
                  className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50"
                  onClick={() => {
                    if (!option.hasSubmenu) {
                      handleSelect(option.value);
                    }
                  }}
                >
                  <div className="flex items-center gap-2">
                    {option.icon && <span>{option.icon}</span>}
                    <span className="text-[13px] text-Gray700">
                      {option.label}
                    </span>
                  </div>
                  {option.hasSubmenu && (
                    <ChevronRight className="h-4 w-4 text-Gray700" />
                  )}
                </div>

                {/* First level submenu (opens to the right) */}
                {option.hasSubmenu &&
                  hoveredOption === option.value &&
                  option.subOptions && (
                    <div className="absolute left-full top-0 max-w-[300px] w-full bg-white border border-gray-200 rounded-md shadow-lg">
                      <ul className="py-1">
                        {option.subOptions.map((subOption) => (
                          <li key={subOption.value} className="relative">
                            <div
                              className={cn(
                                "flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50",
                                expandedSubOption === subOption.value &&
                                  "bg-gray-50"
                              )}
                              onClick={(e) => {
                                if (subOption.hasSubmenu) {
                                  toggleSubOptionExpand(subOption.value, e);
                                } else {
                                  handleSelect(subOption.value);
                                }
                              }}
                            >
                              <span className="text-[13px] text-Gray700">
                                {subOption.label}
                              </span>
                              {subOption.hasSubmenu && (
                                <ChevronDown
                                  className={cn(
                                    "h-4 w-4 text-gray-400 transition-transform",
                                    expandedSubOption === subOption.value &&
                                      "transform rotate-180"
                                  )}
                                />
                              )}
                            </div>

                            {/* Second level submenu (opens downward) */}
                            {subOption.hasSubmenu &&
                              expandedSubOption === subOption.value &&
                              subOption.subOptions && (
                                <div className="bg-gray-50 py-1">
                                  <ul>
                                    {subOption.subOptions.map((foodItem) => (
                                      <li key={foodItem.value}>
                                        <div
                                          className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                                          onClick={() =>
                                            handleSelect(foodItem.value)
                                          }
                                        >
                                          <span className="text-[13px] text-primary">
                                            {foodItem.label}
                                          </span>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
