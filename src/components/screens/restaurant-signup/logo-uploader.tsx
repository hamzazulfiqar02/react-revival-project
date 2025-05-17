
import React, { useState } from 'react';
import { Upload, X, Edit } from 'lucide-react';

interface LogoUploaderProps {
  onLogoChange: (file: File | null) => void;
  initialLogo?: string | null;
}

export function LogoUploader({ onLogoChange, initialLogo = null }: LogoUploaderProps) {
  const [logoPreview, setLogoPreview] = useState<string | null>(initialLogo);
  const [isDragging, setIsDragging] = useState(false);

  const handleLogoChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
        onLogoChange(file);
      };
      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
      onLogoChange(null);
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
    onLogoChange(null);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Restaurant Logo *
      </label>

      <div className="flex flex-col items-center">
        {logoPreview ? (
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
              <img
                src={logoPreview}
                alt="Restaurant logo"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              type="button"
              onClick={handleRemoveLogo}
              className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
            >
              <X size={16} className="text-gray-500" />
            </button>
            <button
              type="button"
              onClick={() => document.getElementById('logo-upload')?.click()}
              className="absolute bottom-1 right-1 bg-primary/20 rounded-full p-1 shadow-md hover:bg-primary/30"
            >
              <Edit size={16} className="text-primary" />
            </button>
          </div>
        ) : (
          <div
            className={`w-32 h-32 relative rounded-full flex flex-col items-center justify-center 
              ${
                isDragging
                  ? "bg-primary/10 border-2 border-dashed border-primary"
                  : "bg-gray-100 border-2 border-dashed border-gray-300"
              }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('logo-upload')?.click()}
          >
            <Upload className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-xs text-gray-500 text-center px-2">Click or drag to upload logo</span>
          </div>
        )}

        <input
          id="logo-upload"
          name="logo-upload"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileInputChange}
        />
      </div>
    </div>
  );
}
