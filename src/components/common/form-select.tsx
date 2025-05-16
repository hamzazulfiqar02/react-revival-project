
"use client";

import React from "react";
import { Field, ErrorMessage, useField } from "formik";
import { ChevronDown } from "lucide-react";

interface FormSelectProps {
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  options: { label: string; value: string }[];
}

export default function FormSelect({
  label,
  name,
  placeholder,
  className = "",
  disabled = false,
  icon,
  options,
}: FormSelectProps) {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  const hasIcon = icon !== undefined;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {hasIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
        <div className="relative">
          <Field
            as="select"
            id={name}
            name={name}
            disabled={disabled}
            className={`w-full h-11 ${
              hasIcon ? "pl-10" : "pl-3"
            } pr-10 py-2 border ${
              hasError ? "border-red-500" : "border-Gray200"
            } rounded-md focus:outline-none focus:ring-1 focus:ring-primary appearance-none bg-Gray50 ${className}`}
          >
            <option value="" disabled>
              {placeholder || "Select an option"}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
}
