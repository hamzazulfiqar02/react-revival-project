"use client"

import { useState } from "react"
import Image from "next/image"
import { Upload } from "lucide-react"

interface ImageUploadStepProps {
  onNext: (images: string[]) => void
  onClose: () => void
}

export function ImageUploadStep({ onNext, onClose }: ImageUploadStepProps) {
  const [mainImage, setMainImage] = useState<string | null>(null)
  const [additionalImages, setAdditionalImages] = useState<string[]>(Array(5).fill(null))

  // Placeholder function for image upload
  const handleImageUpload = (index = -1) => {
    // In a real app, this would handle file selection and upload
    const mockImageUrl = `/images/food-${Math.floor(Math.random() * 4) + 1}.png`

    if (index === -1) {
      setMainImage(mockImageUrl)
    } else {
      const newImages = [...additionalImages]
      newImages[index] = mockImageUrl
      setAdditionalImages(newImages)
    }
  }

  return (
    <div className="p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Add a new Dish</h2>
      </div>

      {/* Main image upload */}
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => handleImageUpload()}
        style={{ height: "200px" }}
      >
        {mainImage ? (
          <div className="relative w-full h-full">
            <Image src={mainImage || "/placeholder.svg"} alt="Dish preview" fill className="object-contain" />
          </div>
        ) : (
          <>
            <div className="bg-gray-100 rounded-full p-3 mb-2">
              <Upload className="h-6 w-6 text-gray-500" />
            </div>
            <p className="text-sm text-gray-500">Click to upload</p>
          </>
        )}
      </div>

      {/* Additional images */}
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {additionalImages.map((img, index) => (
          <div
            key={index}
            className="border border-dashed border-gray-300 rounded-lg flex-shrink-0 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleImageUpload(index)}
            style={{ width: "80px", height: "80px" }}
          >
            {img ? (
              <div className="relative w-full h-full">
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Additional image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <p className="text-xs text-center text-gray-400">Click to upload</p>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button onClick={onClose} className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 mr-2">
          Cancel
        </button>
        <button
          onClick={() => onNext([mainImage!, ...additionalImages.filter(Boolean)])}
          className="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary/90"
          disabled={!mainImage}
        >
          Next
        </button>
      </div>
    </div>
  )
}
