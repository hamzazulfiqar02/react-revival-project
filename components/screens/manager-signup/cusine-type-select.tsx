"use client"

import type React from "react"

import { useState } from "react"
import { useField, useFormikContext } from "formik"
import { ChevronDown } from "lucide-react"

interface CuisineTypeSelectProps {
  label?: string | React.ReactNode
  name: string
}

export function CuisineTypeSelect({ label, name }: CuisineTypeSelectProps) {
  const [field, meta] = useField(name)
  const { setFieldValue } = useFormikContext()
  const [isOpen, setIsOpen] = useState(false)

  const cuisineTypes = [
    "Italian",
    "Chinese",
    "Japanese",
    "Mexican",
    "Indian",
    "Thai",
    "French",
    "Mediterranean",
    "American",
    "Other",
  ]

  const hasError = meta.touched && meta.error

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <div
          className={`w-full h-11 pl-10 pr-3 py-2 border ${
            hasError ? "border-red-500" : "border-Gray200"
          } rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-Gray50 flex items-center justify-between cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-Gray600"
            >
              <path
                d="M3 5H21M3 12H21M3 19H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className={`text-xs ${!field.value ? "text-gray-400" : ""}`}>
            {field.value || "Select Cuisine Type"}
          </span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {cuisineTypes.map((type) => (
              <div
                key={type}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => {
                  setFieldValue(name, type)
                  setIsOpen(false)
                }}
              >
                {type}
              </div>
            ))}
          </div>
        )}
      </div>
      {hasError && <div className="text-red-500 text-xs mt-1">{meta.error}</div>}
    </div>
  )
}
