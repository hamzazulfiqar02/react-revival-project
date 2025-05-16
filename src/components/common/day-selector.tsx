import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";

interface DaySelectorProps {
  value: string[];
  onValueChange: (value: string[]) => void;
  label?: string;
}

export const DaySelector: React.FC<DaySelectorProps> = ({ 
  value, 
  onValueChange,
  label 
}) => {
  const handleValueChange = (newValue: string[]) => {
    // Ensure we always keep Monday selected for BOGO deals
    if (value.includes('mon') && !newValue.includes('mon') && newValue.length > 0) {
      onValueChange(newValue);
    } else if (newValue.length === 0 && value.includes('mon')) {
      onValueChange(['mon']);
    } else {
      onValueChange(newValue);
    }
  };

  return (
    <div className="space-y-2">
      {label && <Label className="block text-sm font-medium text-gray-700">{label}</Label>}
      <ToggleGroup 
        type="multiple" 
        value={value} 
        onValueChange={handleValueChange}
        className="flex flex-wrap gap-2"
      >
        <ToggleGroupItem value="mon" className="px-3 py-1 text-sm">Mon</ToggleGroupItem>
        <ToggleGroupItem value="tue" className="px-3 py-1 text-sm">Tue</ToggleGroupItem>
        <ToggleGroupItem value="wed" className="px-3 py-1 text-sm">Wed</ToggleGroupItem>
        <ToggleGroupItem value="thu" className="px-3 py-1 text-sm">Thu</ToggleGroupItem>
        <ToggleGroupItem value="fri" className="px-3 py-1 text-sm">Fri</ToggleGroupItem>
        <ToggleGroupItem value="sat" className="px-3 py-1 text-sm">Sat</ToggleGroupItem>
        <ToggleGroupItem value="sun" className="px-3 py-1 text-sm">Sun</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
