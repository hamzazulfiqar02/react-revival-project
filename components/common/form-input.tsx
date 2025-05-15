"use client";

import type React from "react";

import { ReactNode, useState } from "react";
import { Field, ErrorMessage, useField } from "formik";
import { Eye, EyeOff, Mail } from "lucide-react";
import { KeyIcon } from "@/icons";

interface FormInputProps {
  label?: string | ReactNode;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  showPasswordToggle?: boolean;
  icon?: React.ReactNode;
  iconType?: "mail" | "key" | "custom";
  multiline?: boolean;
  rows?: number;
}

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  className = "",
  disabled = false,
  showPasswordToggle = false,
  icon,
  iconType,
  multiline = false,
  rows = 3,
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  const inputType = showPasswordToggle
    ? showPassword
      ? "text"
      : "password"
    : type;

  // Determine which icon to show
  const renderIcon = () => {
    if (icon) {
      return icon;
    }

    if (iconType === "mail") {
      return <Mail strokeWidth={1} size={18} className="text-Gray600" />;
    }

    if (iconType === "key") {
      return <KeyIcon />;
    }

    return null;
  };

  const hasIcon = icon || iconType;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {hasIcon && (
          <div
            className={`absolute left-3 ${
              multiline ? "top-3" : "top-1/2 transform -translate-y-1/2"
            } text-gray-500`}
          >
            {renderIcon()}
          </div>
        )}

        {multiline ? (
          <Field
            as="textarea"
            id={name}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            className={`w-full ${hasIcon ? "pl-10" : "pl-3"} pr-3 py-2 border ${
              hasError ? "border-red-500" : "border-Gray200"
            } rounded-md focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-xs placeholder:font-poppins bg-Gray50 ${className}`}
          />
        ) : (
          <Field
            id={name}
            name={name}
            type={inputType}
            placeholder={placeholder}
            disabled={disabled}
            className={`w-full h-11 ${hasIcon ? "pl-10" : "pl-3"} pr-${
              showPasswordToggle ? "10" : "3"
            } py-2 border ${
              hasError ? "border-red-500" : "border-Gray200"
            } rounded-md focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-xs placeholder:font-poppins bg-Gray50 ${className}`}
          />
        )}

        {showPasswordToggle && !multiline && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            disabled={disabled}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
}
