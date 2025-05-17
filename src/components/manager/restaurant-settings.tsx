
import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Restaurant } from "./types";

interface RestaurantSettingsProps {
  restaurant: Restaurant;
  onUpdateRestaurant: (data: Partial<Restaurant>) => Promise<Restaurant>;
}

export function RestaurantSettings({ restaurant, onUpdateRestaurant }: RestaurantSettingsProps) {
  const [formData, setFormData] = useState<Partial<Restaurant>>({
    name: restaurant.name,
    logo: restaurant.logo,
    cuisineType: restaurant.cuisineType,
    address: restaurant.address,
    phoneNumber: restaurant.phoneNumber || '',
    email: restaurant.email || '',
    website: restaurant.website || '',
    reservationUrl: restaurant.reservationUrl || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      await onUpdateRestaurant(formData);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (err) {
      setError('Failed to update restaurant details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Restaurant Settings</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Restaurant Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cuisineType">Cuisine Type</Label>
              <select
                id="cuisineType"
                name="cuisineType"
                value={formData.cuisineType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="Italian">Italian</option>
                <option value="Chinese">Chinese</option>
                <option value="Mexican">Mexican</option>
                <option value="Indian">Indian</option>
                <option value="American">American</option>
                <option value="Japanese">Japanese</option>
                <option value="Thai">Thai</option>
                <option value="French">French</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
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
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reservationUrl">Reservation URL</Label>
              <Input
                id="reservationUrl"
                name="reservationUrl"
                value={formData.reservationUrl}
                onChange={handleChange}
              />
            </div>
          </div>
          
          {error && (
            <div className="px-4 py-3 bg-red-50 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          {submitSuccess && (
            <div className="px-4 py-3 bg-green-50 text-green-700 rounded-md">
              Restaurant details successfully updated!
            </div>
          )}
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Updating..." : "Save Changes"}
          </Button>
        </form>
      </div>
    </div>
  );
}
