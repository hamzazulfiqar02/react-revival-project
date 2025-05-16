
import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

interface FileUploadFieldProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept: string;
  multiple?: boolean;
  required?: boolean;
  helpText?: string;
}

export function FileUploadField({
  id,
  label,
  icon,
  description,
  onChange,
  accept,
  multiple = false,
  required = false,
  helpText
}: FileUploadFieldProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="border border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
        <label htmlFor={id} className="flex flex-col items-center justify-center cursor-pointer">
          {icon}
          <span className="mt-2 text-sm text-gray-500">{description}</span>
          <Input
            id={id}
            name={id}
            type="file"
            accept={accept}
            onChange={onChange}
            multiple={multiple}
            className="hidden"
            required={required}
          />
        </label>
      </div>
      {helpText && <p className="text-xs text-gray-500 mt-1">{helpText}</p>}
    </div>
  );
}
