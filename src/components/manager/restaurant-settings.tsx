
import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface Restaurant {
  id: string;
  name: string;
  logo: string;
  cuisineType: string;
  address: string;
  phoneNumber: string;
  email: string;
  website: string;
  reservationUrl: string;
  [key: string]: any;
}

interface RestaurantSettingsProps {
  restaurant: Restaurant;
  onUpdateRestaurant: (data: Partial<Restaurant>) => Promise<Restaurant>;
}

export function RestaurantSettings({ restaurant, onUpdateRestaurant }: RestaurantSettingsProps) {
  const [formData, setFormData] = useState<Restaurant>(restaurant);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await onUpdateRestaurant(formData);
      alert('Restaurant settings updated successfully!');
    } catch (error) {
      alert('Error updating restaurant settings');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Restaurant Settings</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Restaurant Name</label>
            <Input 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="cuisineType" className="text-sm font-medium">Cuisine Type</label>
            <Input 
              id="cuisineType"
              name="cuisineType"
              value={formData.cuisineType}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="address" className="text-sm font-medium">Address</label>
            <Input 
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="text-sm font-medium">Phone Number</label>
              <Input 
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="website" className="text-sm font-medium">Website</label>
            <Input 
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="reservationUrl" className="text-sm font-medium">Reservation URL</label>
            <Input 
              id="reservationUrl"
              name="reservationUrl"
              value={formData.reservationUrl}
              onChange={handleChange}
            />
          </div>
          
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Updating...' : 'Save Settings'}
          </Button>
        </form>
      </div>
    </div>
  );
}
