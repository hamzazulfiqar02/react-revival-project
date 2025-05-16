
import React from "react";
import { DatePickerField } from "./date-picker-field";
import { TimePickerField } from "./time-picker-field";
import { DaySelector } from "../../common/day-selector";
import { Label } from "../../ui/label";
import { FileUploadField } from "./file-upload-field";
import { FileText } from "lucide-react";
import { Deal } from "../../../types/restaurant";

interface HappyHourFormSectionProps {
  formData: Partial<Deal>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleDaysChange: (days: string[]) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  menuFile: File | null;
}

export function HappyHourFormSection({
  formData,
  handleChange,
  handleDaysChange,
  handleFileChange,
  menuFile
}: HappyHourFormSectionProps) {
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TimePickerField
          id="startTime"
          name="startTime"
          label="Start Time"
          value={formData.startTime}
          onChange={handleChange}
          required
        />
        <TimePickerField
          id="endTime"
          name="endTime"
          label="End Time"
          value={formData.endTime}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <Label>Available Days</Label>
        <DaySelector 
          value={formData.days || []}
          onValueChange={handleDaysChange}
        />
      </div>
      
      <FileUploadField 
        id="menu"
        label="Upload Menu (PDF)"
        icon={<FileText className="h-6 w-6 text-gray-400" />}
        description={menuFile ? menuFile.name : "Click to upload PDF menu"}
        onChange={handleFileChange}
        accept=".pdf"
        required
      />
    </>
  );
}
