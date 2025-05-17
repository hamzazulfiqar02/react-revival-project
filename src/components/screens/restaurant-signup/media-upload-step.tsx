
import React, { useState, useRef } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ChevronLeft, ChevronRight, Plus, Image, File } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mediaUploadSchema = Yup.object({
  images: Yup.array()
    .min(1, 'Please upload at least one image')
    .max(15, 'You can\'t upload more than 15 images'),
  menuPdf: Yup.mixed().required('Menu PDF is required'),
});

interface MediaUploadStepProps {
  onHandleNext: () => void;
}

export function MediaUploadStep({ onHandleNext }: MediaUploadStepProps) {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [menuFile, setMenuFile] = useState<File | null>(null);
  const [menuFileName, setMenuFileName] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const menuInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    
    // Convert FileList to array and filter out non-image files
    const newFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    
    // Check if we would exceed the max images
    if (uploadedImages.length + newFiles.length > 15) {
      alert('You can upload a maximum of 15 images');
      return;
    }
    
    // Add the new files
    const updatedFiles = [...uploadedImages, ...newFiles];
    setUploadedImages(updatedFiles);
    
    // Generate preview URLs for new images
    const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls([...previewUrls, ...newPreviewUrls]);
  };

  const handleMenuFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || !files[0]) return;
    
    const file = files[0];
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file for the menu');
      return;
    }
    
    setMenuFile(file);
    setMenuFileName(file.name);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, type: 'image' | 'menu') => {
    event.preventDefault();
    
    const files = event.dataTransfer.files;
    if (!files || files.length === 0) return;
    
    if (type === 'image') {
      // Filter for images
      const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
      
      // Check if we would exceed the max images
      if (uploadedImages.length + imageFiles.length > 15) {
        alert('You can upload a maximum of 15 images');
        return;
      }
      
      // Add the new files
      const updatedFiles = [...uploadedImages, ...imageFiles];
      setUploadedImages(updatedFiles);
      
      // Generate preview URLs
      const newPreviewUrls = imageFiles.map(file => URL.createObjectURL(file));
      setPreviewUrls([...previewUrls, ...newPreviewUrls]);
    } else {
      // For menu, just take the first PDF
      const pdfFile = Array.from(files).find(file => file.type === 'application/pdf');
      if (pdfFile) {
        setMenuFile(pdfFile);
        setMenuFileName(pdfFile.name);
      } else {
        alert('Please upload a PDF file for the menu');
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const removeImage = (index: number) => {
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);
    
    const newUrls = [...previewUrls];
    URL.revokeObjectURL(newUrls[index]); // Clean up memory
    newUrls.splice(index, 1);
    setPreviewUrls(newUrls);
    
    if (currentImageIndex >= newUrls.length && newUrls.length > 0) {
      setCurrentImageIndex(newUrls.length - 1);
    }
  };

  const handleSubmit = (values: any) => {
    // Store form data in session/local storage for later use
    localStorage.setItem('restaurantMediaUpload', JSON.stringify({
      imageCount: uploadedImages.length,
      menuFileName: menuFileName
    }));
    onHandleNext();
  };

  const showNextImage = () => {
    if (previewUrls.length > 0 && currentImageIndex < previewUrls.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const showPreviousImage = () => {
    if (previewUrls.length > 0 && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <Formik
      initialValues={{ images: uploadedImages, menuPdf: menuFile }}
      validationSchema={mediaUploadSchema}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isValid, dirty }) => (
        <Form className="space-y-8">
          {/* Images Upload Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Upload Restaurant Images</h2>
            <p className="text-sm text-gray-500 mb-4">Upload images of your restaurant, food, and interior (max 15 images)</p>
            
            {/* Main upload area */}
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => imageInputRef.current?.click()}
              onDrop={(e) => handleDrop(e, 'image')}
              onDragOver={handleDragOver}
            >
              <input
                ref={imageInputRef}
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <Image size={40} className="text-gray-400 mb-3" />
              <p className="mb-1 text-sm">
                <span className="text-primary">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                Images less than 10MB (JPEG/PNG)
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {uploadedImages.length}/15 images uploaded
              </p>
            </div>
            
            {errors.images && touched.images && (
              <div className="text-red-500 text-xs mt-2">{errors.images as string}</div>
            )}

            {/* Image preview gallery */}
            {previewUrls.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Uploaded Images</h3>
                
                {/* Current image display */}
                <div className="relative h-64 w-full mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={previewUrls[currentImageIndex]} 
                    alt={`Preview ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                  
                  <button 
                    type="button"
                    onClick={() => removeImage(currentImageIndex)}
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500 p-1 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
                
                {/* Thumbnails navigation */}
                <div className="relative flex items-center">
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    disabled={currentImageIndex === 0}
                    className={`p-1 rounded-full bg-white shadow-md text-gray-600 hover:bg-gray-100 ${currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <div className="flex overflow-x-auto space-x-2 px-2 py-1 mx-2 scrollbar-hide">
                    {previewUrls.map((url, index) => (
                      <div
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 cursor-pointer ${index === currentImageIndex ? 'border-primary' : 'border-transparent'}`}
                      >
                        <img
                          src={url}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <button
                    type="button"
                    onClick={showNextImage}
                    disabled={currentImageIndex === previewUrls.length - 1}
                    className={`p-1 rounded-full bg-white shadow-md text-gray-600 hover:bg-gray-100 ${currentImageIndex === previewUrls.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Menu PDF Upload Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Upload Menu PDF</h2>
            <p className="text-sm text-gray-500 mb-4">Upload your restaurant menu in PDF format</p>
            
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => menuInputRef.current?.click()}
              onDrop={(e) => handleDrop(e, 'menu')}
              onDragOver={handleDragOver}
            >
              <input
                ref={menuInputRef}
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleMenuFileChange}
              />
              <File size={40} className="text-gray-400 mb-3" />
              <p className="mb-1 text-sm">
                <span className="text-primary">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                PDF less than 10MB
              </p>
            </div>
            
            {menuFileName && (
              <div className="mt-2 p-3 bg-gray-100 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <File size={20} className="text-primary mr-2" />
                  <span className="text-sm truncate max-w-xs">{menuFileName}</span>
                </div>
                <button 
                  type="button"
                  onClick={() => {
                    setMenuFile(null);
                    setMenuFileName('');
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            )}
            
            {errors.menuPdf && touched.menuPdf && (
              <div className="text-red-500 text-xs mt-2">{errors.menuPdf as string}</div>
            )}
          </div>

          <div className="mt-8">
            <Button 
              type="submit" 
              className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90"
              disabled={!(isValid && (uploadedImages.length > 0 && menuFile !== null))}
            >
              Submit For Review
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
