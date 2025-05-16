
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Deal } from "../../types/restaurant";
import { BOGOFormSection } from "./form/bogo-form-section";
import { HappyHourFormSection } from "./form/happy-hour-form-section";

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
    days: type === 'BOGO' ? ['mon'] : [],
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
      if (e.target.id === "menu") {
        setMenuFile(e.target.files[0]);
      }
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
      
      {type === 'BOGO' ? (
        <BOGOFormSection
          formData={formData}
          handleChange={handleChange}
          handleDaysChange={handleDaysChange}
          handleFileChange={handleFileChange}
          menuFile={menuFile}
        />
      ) : (
        <HappyHourFormSection
          formData={formData}
          handleChange={handleChange}
          handleDaysChange={handleDaysChange}
          handleFileChange={handleFileChange}
          menuFile={menuFile}
        />
      )}
      
      <Button type="submit" className="w-full">
        Save {type === 'BOGO' ? 'BOGO Deal' : 'Happy Hour'}
      </Button>
    </form>
  );
}
