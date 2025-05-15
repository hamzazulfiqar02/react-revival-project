"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Edit, Pencil, Upload, X } from "lucide-react";

interface RestaurantProfileLogoProps {
  onLogoChange?: (file: File | null) => void;
  initialLogo?: string | null;
}

export default function RestaurantProfileLogo({
  onLogoChange,
  initialLogo = null,
}: RestaurantProfileLogoProps) {
  const [logoPreview, setLogoPreview] = useState<string | null>(initialLogo);
  const [isDragging, setIsDragging] = useState(false);

  const handleLogoChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
        if (onLogoChange) onLogoChange(file);
      };
      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
      if (onLogoChange) onLogoChange(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleLogoChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleLogoChange(e.target.files[0]);
    }
  };

  const handleRemoveLogo = () => {
    setLogoPreview(null);
    if (onLogoChange) onLogoChange(null);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-8">
        <label className="block text-sm font-semibold font-poppins text-Black100">
          Logo
        </label>

        <div className="flex flex-col items-center">
          {logoPreview ? (
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                  src={logoPreview || "/placeholder.svg"}
                  alt="Restaurant logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                type="button"
                onClick={handleRemoveLogo}
                className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
              >
                <X size={18} className="text-gray-500" />
              </button>
            </div>
          ) : (
            <div
              className={`w-32 h-32 relative rounded-full flex items-center justify-center 
                ${
                  isDragging
                    ? "bg-primary/10 border-2 border-dashed border-primary"
                    : "bg-gray-100 border-2 border-dashed border-gray-300"
                }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className="h-8 w-8 text-gray-400" />
              <input
                id="logo-upload"
                name="logo-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileInputChange}
              />
              <div
                className="w-6 h-6 flex justify-center items-center rounded-full absolute right-1 bottom-1 cursor-pointer bg-[#F5D6E3]"
                onClick={() => document.getElementById("logo-upload")?.click()}
              >
                <Pencil size={10} className="" />
              </div>
            </div>
          )}

          {!logoPreview && (
            <div className="mt-4 text-center bg-red-400">
              <div className="text-sm text-gray-600">
                <label
                  htmlFor="logo-upload"
                  className="relative cursor-pointer font-medium text-primary hover:text-primary-dark focus-within:outline-none"
                ></label>{" "}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
