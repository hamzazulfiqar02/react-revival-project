"use client";

import type React from "react";

import { Field, ErrorMessage, useField } from "formik";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  options: Option[];
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

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-semibold mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}

        <Field
          as="select"
          id={name}
          name={name}
          disabled={disabled}
          className={`select w-full h-11 bg-transparent ${
            icon ? "pl-10" : "pl-3"
          } pr-10 py-2 border ${
            hasError ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-1 focus:ring-primary appearance-none ${className}`}
        >
          {placeholder && (
            <option style={{}} value="">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>

        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
          <ChevronDown size={18} />
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
