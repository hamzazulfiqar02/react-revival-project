"use client"

import type React from "react"

import { useState } from "react"

interface DishDetailsStepProps {
  onSave: (details: DishDetails) => void
  onBack: () => void
  onClose: () => void
}

export interface DishDetails {
  title: string
  cuisineType: string
  price: string
  description: string
}

export function DishDetailsStep({ onSave, onBack, onClose }: DishDetailsStepProps) {
  const [details, setDetails] = useState<DishDetails>({
    title: "",
    cuisineType: "",
    price: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    onSave(details)
  }

  return (
    <div className="p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Add a new Dish</h2>
      </div>

      <div className="space-y-6">
        {/* Dish Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Dish Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={details.title}
            onChange={handleChange}
            placeholder="Enter dish title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Cuisine Type */}
          <div>
            <label htmlFor="cuisineType" className="block text-sm font-medium text-gray-700 mb-1">
              Cuisine Type
            </label>
            <select
              id="cuisineType"
              name="cuisineType"
              value={details.cuisineType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">Select Cuisine Type</option>
              <option value="European">European</option>
              <option value="Asian">Asian</option>
              <option value="American">American</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="Mexican">Mexican</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                type="number"
                id="price"
                name="price"
                value={details.price}
                onChange={handleChange}
                placeholder="Enter dish price"
                className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Dish Description
          </label>
          <textarea
            id="description"
            name="description"
            value={details.description}
            onChange={handleChange}
            placeholder="Write the description for your dish"
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button onClick={onClose} className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 mr-2">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary/90"
          disabled={!details.title || !details.cuisineType || !details.price}
        >
          Save
        </button>
      </div>
    </div>
  )
}
