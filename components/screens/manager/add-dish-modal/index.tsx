"use client"


import { useState } from "react"
import { X } from "lucide-react"
import { ImageUploadStep } from "./image-upload-step"
import { DishDetails, DishDetailsStep } from "./dish-details-steps"

interface AddDishModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (dish: { images: string[]; details: DishDetails }) => void
}

export function AddDishModal({ isOpen, onClose, onSave }: AddDishModalProps) {
  const [step, setStep] = useState(1)
  const [images, setImages] = useState<string[]>([])

  if (!isOpen) return null

  const handleImageUploadComplete = (uploadedImages: string[]) => {
    setImages(uploadedImages)
    setStep(2)
  }

  const handleDetailsComplete = (details: DishDetails) => {
    onSave({ images, details })
    setStep(1)
    setImages([])
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="px-6">
          <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-primary transition-all duration-300 ease-in-out"
              style={{ width: step === 1 ? "50%" : "100%" }}
            />
          </div>
        </div>

        {step === 1 ? (
          <ImageUploadStep onNext={handleImageUploadComplete} onClose={onClose} />
        ) : (
          <DishDetailsStep onSave={handleDetailsComplete} onBack={() => setStep(1)} onClose={onClose} />
        )}
      </div>
    </div>
  )
}
