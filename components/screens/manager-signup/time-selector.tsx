"use client"

import { useState, useRef, useEffect } from "react"
import { Clock } from "lucide-react"

interface TimeSelectorProps {
  name: string
  placeholder: string
  value: string
  onChange: (time: string) => void
  error?: string
}

export function TimeSelector({ name, placeholder, value, onChange, error }: TimeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Generate time options in 30-minute intervals
  const generateTimeOptions = () => {
    const options = []
    for (let hour = 0; hour < 24; hour++) {
      for (const minute of [0, 30]) {
        const hourFormatted = hour % 12 === 0 ? 12 : hour % 12
        const amPm = hour < 12 ? "AM" : "PM"
        const minuteFormatted = minute === 0 ? "00" : minute
        const timeString = `${hourFormatted}:${minuteFormatted} ${amPm}`
        options.push(timeString)
      }
    }
    return options
  }

  const timeOptions = generateTimeOptions()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <div
        className={`w-full h-11 pl-10 pr-3 py-2 border ${
          error ? "border-red-500" : "border-Gray200"
        } rounded-md bg-Gray50 flex items-center justify-between cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <Clock size={18} className="text-Gray600" />
        </div>
        <span className={`text-sm ${!value ? "text-gray-400" : ""}`}>{value || placeholder}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-500"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          {timeOptions.map((time) => (
            <div
              key={time}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => {
                onChange(time)
                setIsOpen(false)
              }}
            >
              {time}
            </div>
          ))}
        </div>
      )}
      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
    </div>
  )
}
