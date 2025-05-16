
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../ui/switch";
import { Restaurant } from "../../types/restaurant";
import { toast } from "../../helpers/toast";
import { Upload } from "lucide-react";

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
    isPremium: restaurant.isPremium
  });
  
  const [logoFile, setLogoFile] = useState<File | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSwitchChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, isPremium: checked }));
  };
  
  const handleCuisineChange = (value: string) => {
    setFormData(prev => ({ ...prev, cuisineType: value }));
  };
  
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // In a real app, we would handle file upload here
      if (logoFile) {
        // Simulate logo upload
        console.log("Uploading logo file:", logoFile.name);
        // Update formData with new logo URL
        // formData.logo = "/uploaded-logo.png";
      }
      
      await onUpdateRestaurant(formData);
      toast.success("Restaurant settings updated successfully!");
    } catch (error) {
      toast.error("Failed to update restaurant settings.");
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Restaurant Settings</h1>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h2 className="font-medium">Basic Information</h2>
            
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
              <Label htmlFor="logo">Restaurant Logo</Label>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 border border-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={logoFile ? URL.createObjectURL(logoFile) : formData.logo} 
                    alt="Restaurant Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="border border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                    <label htmlFor="logo-upload" className="flex flex-col items-center justify-center cursor-pointer">
                      <Upload className="h-6 w-6 text-gray-400" />
                      <span className="mt-2 text-sm text-gray-500">
                        {logoFile ? logoFile.name : "Click to upload new logo"}
                      </span>
                      <Input
                        id="logo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Label htmlFor="cuisineType">Cuisine Type</Label>
              <Select 
                onValueChange={handleCuisineChange} 
                defaultValue={formData.cuisineType}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select cuisine type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Italian">Italian</SelectItem>
                  <SelectItem value="Chinese">Chinese</SelectItem>
                  <SelectItem value="Japanese">Japanese</SelectItem>
                  <SelectItem value="Mexican">Mexican</SelectItem>
                  <SelectItem value="American">American</SelectItem>
                  <SelectItem value="Indian">Indian</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="Thai">Thai</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
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
          </div>
          
          <div className="space-y-4">
            <h2 className="font-medium">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Optional"
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
                  placeholder="Optional"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Optional"
                />
              </div>
              <div>
                <Label htmlFor="reservationUrl">Reservation URL</Label>
                <Input
                  id="reservationUrl"
                  name="reservationUrl"
                  type="url"
                  value={formData.reservationUrl}
                  onChange={handleChange}
                  placeholder="Optional"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="font-medium">Restaurant Status</h2>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium">Premium Status</h3>
                <p className="text-sm text-gray-500">Enables additional features and promotions</p>
              </div>
              <Switch 
                checked={!!formData.isPremium}
                onCheckedChange={handleSwitchChange}
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full">
            Save Settings
          </Button>
        </form>
      </div>
    </div>
  );
}
