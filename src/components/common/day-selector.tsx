
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface DaySelectorProps {
  value: string[];
  onValueChange: (value: string[]) => void;
  disabled?: boolean;
}

export function DaySelector({ value, onValueChange, disabled }: DaySelectorProps) {
  const days = [
    { value: "mon", label: "Mon" },
    { value: "tue", label: "Tue" },
    { value: "wed", label: "Wed" },
    { value: "thu", label: "Thu" },
    { value: "fri", label: "Fri" },
    { value: "sat", label: "Sat" },
    { value: "sun", label: "Sun" },
  ];

  const handleValueChange = (newValue: string[]) => {
    onValueChange(newValue);
  };

  return (
    <ToggleGroup
      type="multiple"
      value={value}
      onValueChange={handleValueChange}
      className="flex flex-wrap gap-1 mt-1"
      disabled={disabled}
    >
      {days.map((day) => (
        <ToggleGroupItem
          key={day.value}
          value={day.value}
          aria-label={`Toggle ${day.label}`}
          className="data-[state=on]:bg-primary data-[state=on]:text-white"
        >
          {day.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
