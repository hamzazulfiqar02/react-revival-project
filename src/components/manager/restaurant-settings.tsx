
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Restaurant } from "@/types/restaurant";
import { Upload } from "lucide-react";
import { toast } from "@/helpers/toast";

interface RestaurantSettingsProps {
  restaurant: Restaurant;
  onUpdateRestaurant: (restaurant: Partial<Restaurant>) => void;
}

export function RestaurantSettings({ restaurant, onUpdateRestaurant }: RestaurantSettingsProps) {
  const [formData, setFormData] = useState<Partial<Restaurant>>({
    name: restaurant.name,
    cuisineType: restaurant.cuisineType,
    address: restaurant.address,
    phoneNumber: restaurant.phoneNumber || "",
    email: restaurant.email || "",
    website: restaurant.website || "",
    reservationUrl: restaurant.reservationUrl || "",
  });
  
  const [logoFile, setLogoFile] = useState<File | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: Partial<Restaurant>) => ({ ...prev, [name]: value }));
  };
  
  const handleCuisineChange = (value: string) => {
    setFormData((prev: Partial<Restaurant>) => ({ ...prev, cuisineType: value }));
  };
  
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateRestaurant(formData);
    toast.success("Restaurant settings updated successfully");
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Restaurant Settings</h1>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="font-medium mb-4">Restaurant Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
              {restaurant.logo ? (
                <img 
                  src={restaurant.logo} 
                  alt={restaurant.name} 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <div className="text-gray-400 text-xs text-center">No logo</div>
              )}
            </div>
            <div>
              <Label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-2">Restaurant Logo</Label>
              <div className="flex items-center space-x-2">
                <label htmlFor="logo" className="btn px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-sm cursor-pointer flex items-center">
                  <Upload size={14} className="mr-1" />
                  Change Logo
                  <Input
                    id="logo"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="hidden"
                  />
                </label>
                {logoFile && <span className="text-sm text-gray-500">{logoFile.name}</span>}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <Select 
                onValueChange={handleCuisineChange} 
                defaultValue={formData.cuisineType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select cuisine type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Italian">Italian</SelectItem>
                  <SelectItem value="Chinese">Chinese</SelectItem>
                  <SelectItem value="Mexican">Mexican</SelectItem>
                  <SelectItem value="Indian">Indian</SelectItem>
                  <SelectItem value="American">American</SelectItem>
                  <SelectItem value="Japanese">Japanese</SelectItem>
                  <SelectItem value="Thai">Thai</SelectItem>
                  <SelectItem value="Mediterranean">Mediterranean</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="col-span-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows={2}
              />
            </div>
            
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
          
          <div className="flex justify-end pt-4">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
