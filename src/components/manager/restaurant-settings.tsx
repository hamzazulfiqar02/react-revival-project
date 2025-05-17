
import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Restaurant } from './types';

interface RestaurantSettingsProps {
  restaurant: Restaurant;
  onUpdateRestaurant: (data: Partial<Restaurant>) => Promise<Restaurant>;
}

export function RestaurantSettings({ restaurant, onUpdateRestaurant }: RestaurantSettingsProps) {
  const [formData, setFormData] = useState<Restaurant>(restaurant);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(restaurant.logo);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setLogoPreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onUpdateRestaurant(formData);
      setUpdateSuccess(true);
      setTimeout(() => setUpdateSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to update restaurant:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const cuisineOptions = [
    "Italian", "Chinese", "Japanese", "Mexican", "Indian", 
    "Thai", "French", "Mediterranean", "American", "Other"
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Restaurant Settings</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <Label htmlFor="name">Restaurant Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="cuisineType">Cuisine Type</Label>
                <select
                  id="cuisineType"
                  name="cuisineType"
                  value={formData.cuisineType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                >
                  {cuisineOptions.map(cuisine => (
                    <option key={cuisine} value={cuisine}>{cuisine}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/3 space-y-6">
              <div>
                <Label htmlFor="logo">Restaurant Logo</Label>
                <div className="mt-2 flex flex-col items-center">
                  {logoPreview && (
                    <div className="w-32 h-32 mb-4 relative">
                      <img
                        src={logoPreview}
                        alt="Restaurant Logo"
                        className="w-full h-full object-contain border rounded-md"
                      />
                    </div>
                  )}
                  <Input
                    id="logo"
                    name="logo"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <Label htmlFor="reservationUrl">Reservation URL</Label>
              <Input
                id="reservationUrl"
                name="reservationUrl"
                value={formData.reservationUrl}
                onChange={handleChange}
              />
            </div>
          </div>
          
          {updateSuccess && (
            <div className="px-4 py-3 bg-green-50 text-green-700 rounded-md">
              Restaurant settings updated successfully!
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Settings"}
          </Button>
        </form>
      </div>
    </div>
  );
}
