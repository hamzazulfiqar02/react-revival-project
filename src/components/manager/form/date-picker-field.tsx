
import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Calendar } from "lucide-react";

interface DatePickerFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  optional?: boolean;
}

export function DatePickerField({
  id,
  name,
  label,
  value,
  onChange,
  required = false,
  optional = false
}: DatePickerFieldProps) {
  return (
    <div>
      <Label htmlFor={id}>{label} {optional && <span className="text-xs text-gray-500 ml-1">(Optional)</span>}</Label>
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
        <Input
          id={id}
          name={name}
          type="date"
          value={value}
          onChange={onChange}
          className="pl-10"
          required={required}
        />
      </div>
    </div>
  );
}
