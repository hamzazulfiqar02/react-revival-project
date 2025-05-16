
import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Clock } from "lucide-react";

interface TimePickerFieldProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function TimePickerField({
  id,
  name,
  label,
  value,
  onChange,
  required = false
}: TimePickerFieldProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
        <Input
          id={id}
          name={name}
          type="time"
          value={value}
          onChange={onChange}
          className="pl-10"
          required={required}
        />
      </div>
    </div>
  );
}
