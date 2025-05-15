"use client";

import { useState, useRef } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ChevronLeft, ChevronRight, Plus, ImageIcon } from "lucide-react";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const validationSchema = Yup.object({
  images: Yup.array()
    .min(1, "Please upload at least one image")
    .max(4, "You can't upload more than 4 images")
    .test("fileSize", "File size is too large", (value) => {
      if (!value) return true;
      return value.every((file) => file.size <= MAX_FILE_SIZE);
    }),
});

export function MediaUpload() {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: any
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const newFiles = Array.from(files).filter(
      (file) => file.size <= MAX_FILE_SIZE
    );
    if (newFiles.length === 0) {
      alert("All files exceed the maximum size of 10MB");
      return;
    }

    const newUploadedImages = [...uploadedImages, ...newFiles];
    setUploadedImages(newUploadedImages);
    setFieldValue("images", newUploadedImages);

    // Generate preview URLs
    const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls([...previewUrls, ...newPreviewUrls]);
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    setFieldValue: any
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    if (!files || files.length === 0) return;

    const newFiles = Array.from(files).filter(
      (file) => file.size <= MAX_FILE_SIZE
    );
    if (newFiles.length === 0) {
      alert("All files exceed the maximum size of 10MB");
      return;
    }

    const newUploadedImages = [...uploadedImages, ...newFiles];
    setUploadedImages(newUploadedImages);
    setFieldValue("images", newUploadedImages);

    // Generate preview URLs
    const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls([...previewUrls, ...newPreviewUrls]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Formik
      initialValues={{ images: [] }}
      validationSchema={validationSchema}
      onSubmit={(values) => {}}
    >
      {({ setFieldValue, errors, touched }) => (
        <Form className="space-y-4">
          <h2 className="text-sm font-semibold text-Black100">Upload Media</h2>

          <div>
            {/* Main upload area */}
            <div
              className="border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer bg-gray-50 h-48"
              onClick={triggerFileInput}
              onDrop={(e) => handleDrop(e, setFieldValue)}
              onDragOver={handleDragOver}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileChange(e, setFieldValue)}
              />
              <div className="mb-3">
                <ImageIcon size={40} className="text-gray-400" />
              </div>
              <p className="mb-1">
                <span className="text-primary">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-gray-400 text-sm">
                Menu or IMG less than 10MB
              </p>
            </div>

            {/* Error message */}
            {errors.images && touched.images && (
              <div className="text-red-500 text-sm">{errors.images}</div>
            )}

            {/* Image Thumbnails */}
            <div className="relative flex items-center justify-center mt-6 mb-6">
              <button
                type="button"
                className="absolute left-0 z-10 p-1 rounded-full bg-white shadow-md text-gray-600 hover:bg-gray-100"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex space-x-4 mx-10">
                {/* If no images uploaded, show placeholders */}
                {previewUrls.length === 0
                  ? [1, 2, 3, 4].map((index) => (
                      <div
                        key={index}
                        className="w-20 h-20 border border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer bg-gray-100"
                        onClick={triggerFileInput}
                      >
                        <Plus size={24} className="text-gray-400" />
                      </div>
                    ))
                  : previewUrls.map((url, index) => (
                      <div
                        key={index}
                        className="w-20 h-20 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer bg-gray-100"
                      >
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ))}
              </div>

              <button
                type="button"
                className="absolute right-0 z-10 p-1 rounded-full bg-white shadow-md text-gray-600 hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

         
        </Form>
      )}
    </Formik>
  );
}
