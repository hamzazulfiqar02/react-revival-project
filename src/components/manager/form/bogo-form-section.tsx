
import React from "react";
import { DatePickerField } from "./date-picker-field";
import { DaySelector } from "../../common/day-selector";
import { Label } from "../../ui/label";
import { FileUploadField } from "./file-upload-field";
import { Upload, FileText } from "lucide-react";
import { Deal } from "../../../types/restaurant";

interface BOGOFormSectionProps {
  formData: Partial<Deal>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleDaysChange: (days: string[]) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  menuFile: File | null;
}

export function BOGOFormSection({
  formData,
  handleChange,
  handleDaysChange,
  handleFileChange,
  menuFile
}: BOGOFormSectionProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DatePickerField
          id="startDate"
          name="startDate"
          label="Start Date"
          value={formData.startDate || ""}
          onChange={handleChange}
          required
        />
        <DatePickerField
          id="endDate"
          name="endDate"
          label="End Date"
          value={formData.endDate || ""}
          onChange={handleChange}
          optional
        />
      </div>
      
      <div>
        <Label>Available Days</Label>
        <DaySelector 
          value={formData.days || []}
          onValueChange={handleDaysChange}
        />
        <p className="text-xs text-gray-500 mt-1">Note: Monday is always included for BOGO deals</p>
      </div>
      
      <FileUploadField 
        id="menu"
        label="Upload Menu (PDF)"
        icon={<FileText className="h-6 w-6 text-gray-400" />}
        description={menuFile ? menuFile.name : "Click to upload PDF menu"}
        onChange={handleFileChange}
        accept=".pdf"
      />
      
      <FileUploadField 
        id="images"
        label="Upload Images (max 15)"
        icon={<Upload className="h-6 w-6 text-gray-400" />}
        description="Click to upload images (JPEG/PNG)"
        onChange={handleFileChange}
        accept="image/jpeg,image/png"
        multiple
        helpText="Please upload interior pics, appetizers, main dishes & desserts"
      />
    </>
  );
}
