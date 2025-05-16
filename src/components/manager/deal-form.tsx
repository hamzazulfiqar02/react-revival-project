
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DaySelector } from "@/components/common/day-selector";
import { Label } from "@/components/ui/label";
import { Deal } from "@/types/restaurant";
import { Calendar, Clock, FileText, Upload } from "lucide-react";

interface DealFormProps {
  type: 'BOGO' | 'HAPPY_HOUR';
  onSubmit: (deal: Partial<Deal>) => void;
  initialData?: Partial<Deal>;
}

export function DealForm({ type, onSubmit, initialData }: DealFormProps) {
  const [formData, setFormData] = useState<Partial<Deal>>(initialData || {
    type,
    name: "",
    description: "",
    days: [],
    startDate: new Date().toISOString().split('T')[0],
    isActive: true,
    startTime: type === 'HAPPY_HOUR' ? "17:00" : undefined,
    endTime: type === 'HAPPY_HOUR' ? "19:00" : undefined,
  });
  
  const [menuFile, setMenuFile] = useState<File | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: Partial<Deal>) => ({ ...prev, [name]: value }));
  };
  
  const handleDaysChange = (days: string[]) => {
    setFormData((prev: Partial<Deal>) => ({ ...prev, days }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMenuFile(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Deal Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={type === 'BOGO' ? "BOGO Main Dish" : "Happy Hour Special"}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder={type === 'BOGO' ? "Buy one main dish, get one free" : "50% off selected appetizers"}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="startDate">Start Date</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              className="pl-10"
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="endDate">End Date (Optional)</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <Input
              id="endDate"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              className="pl-10"
            />
          </div>
        </div>
      </div>
      
      {type === 'HAPPY_HOUR' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="startTime">Start Time</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <Input
                id="startTime"
                name="startTime"
                type="time"
                value={formData.startTime}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="endTime">End Time</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <Input
                id="endTime"
                name="endTime"
                type="time"
                value={formData.endTime}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
          </div>
        </div>
      )}
      
      <div>
        <Label>Available Days</Label>
        <DaySelector 
          value={formData.days || []}
          onValueChange={handleDaysChange}
        />
        {type === 'BOGO' && (
          <p className="text-xs text-gray-500 mt-1">Note: Monday is always included for BOGO deals</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="menu">Upload Menu (PDF)</Label>
        <div className="border border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <label htmlFor="menu" className="flex flex-col items-center justify-center cursor-pointer">
            <FileText className="h-6 w-6 text-gray-400" />
            <span className="mt-2 text-sm text-gray-500">{menuFile ? menuFile.name : "Click to upload PDF menu"}</span>
            <Input
              id="menu"
              name="menu"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              required={type === 'HAPPY_HOUR'}
            />
          </label>
        </div>
      </div>
      
      {type === 'BOGO' && (
        <div>
          <Label htmlFor="images">Upload Images (max 15)</Label>
          <div className="border border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <label htmlFor="images" className="flex flex-col items-center justify-center cursor-pointer">
              <Upload className="h-6 w-6 text-gray-400" />
              <span className="mt-2 text-sm text-gray-500">Click to upload images (JPEG/PNG)</span>
              <Input
                id="images"
                name="images"
                type="file"
                accept="image/jpeg,image/png"
                multiple
                className="hidden"
              />
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-1">Please upload interior pics, appetizers, main dishes & desserts</p>
        </div>
      )}
      
      <Button type="submit" className="w-full">
        Save {type === 'BOGO' ? 'BOGO Deal' : 'Happy Hour'}
      </Button>
    </form>
  );
}
