"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";

interface DaySelectorProps {
  value: string[];
  onValueChange: (value: string[]) => void;
  label?: string;
  className?: string;
}

const DaySelector = React.forwardRef<HTMLDivElement, DaySelectorProps>(
  ({ className, label, value, onValueChange, ...props }, ref) => {
    const days = [
      { value: "mon", label: "Mon" },
      { value: "tue", label: "Tue" },
      { value: "wed", label: "Wed" },
      { value: "thu", label: "Thu" },
      { value: "fri", label: "Fri" },
      { value: "sat", label: "Sat" },
      { value: "sun", label: "Sun" },
    ];

    const handleDayToggle = (day: string, checked: boolean) => {
      if (checked) {
        onValueChange([...value, day]);
      } else {
        onValueChange(value.filter((d) => d !== day));
      }
    };

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {label && <div className="text-sm font-medium">{label}</div>}
        <div className="flex flex-wrap justify-between gap-1 mt-4">
          {days.map((day) => (
            <DayCheckbox
              key={day.value}
              checked={value.includes(day.value)}
              onCheckedChange={(checked) =>
                handleDayToggle(day.value, checked as boolean)
              }
              day={day.label}
            />
          ))}
        </div>
      </div>
    );
  }
);
DaySelector.displayName = "DaySelector";

interface DayCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean | "indeterminate") => void;
  day: string;
  className?: string;
}

const DayCheckbox = ({
  checked,
  onCheckedChange,
  day,
  className,
}: DayCheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={cn(
          "peer h-5 w-5 rounded-sm border border-gray-200 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          checked ? "bg-[#CB2C70] border-[#CB2C70]" : "bg-gray-50",
          className
        )}
        id={`day-${day.toLowerCase()}`}
      ></Checkbox>
      <label
        htmlFor={`day-${day.toLowerCase()}`}
        className={cn(
          "flex items-center justify-center text-[13px] text-Gray900 cursor-pointer"
        )}
      >
        {day}
      </label>
    </div>
  );
};

export { DaySelector };
