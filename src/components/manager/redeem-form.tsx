
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Redemption } from "../../types/restaurant";
import { toast } from "../../helpers/toast";
import { Camera, CreditCard, Plus, Users } from "lucide-react";

interface RedeemFormProps {
  onSubmit: (redemption: Partial<Redemption>) => void;
}

export function RedeemForm({ onSubmit }: RedeemFormProps) {
  const [formData, setFormData] = useState<Partial<Redemption>>({
    dealId: "deal1", // Default to BOGO deal
    date: new Date().toISOString(),
    totalBill: 0,
    claimedUsers: 0,
    totalDiners: 0,
    confirmationCode: ""
  });
  
  const [scannedUsers, setScannedUsers] = useState<string[]>([]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'totalBill' ? parseFloat(value) : value 
    }));
  };
  
  const handleScanQR = () => {
    // In a real app, this would activate camera to scan QR code
    // For this mock-up, we'll simulate adding a user
    if (scannedUsers.length < 3) {
      const mockUserID = `user-${Math.floor(Math.random() * 1000)}`;
      setScannedUsers([...scannedUsers, mockUserID]);
      setFormData(prev => ({ 
        ...prev, 
        claimedUsers: (prev.claimedUsers || 0) + 1
      }));
      toast.success("User QR code scanned successfully!");
    } else {
      toast.error("Maximum of 3 users can claim this deal");
    }
  };
  
  const removeScannedUser = (index: number) => {
    const newScannedUsers = scannedUsers.filter((_, i) => i !== index);
    setScannedUsers(newScannedUsers);
    setFormData(prev => ({ 
      ...prev, 
      claimedUsers: newScannedUsers.length
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    if (!formData.confirmationCode) {
      toast.error("Please enter the confirmation code");
      return;
    }
    if (!formData.totalBill || formData.totalBill <= 0) {
      toast.error("Please enter a valid bill amount");
      return;
    }
    if (!formData.claimedUsers || formData.claimedUsers === 0) {
      toast.error("Please scan at least one customer QR code");
      return;
    }
    if (!formData.totalDiners || formData.totalDiners < (formData.claimedUsers || 0)) {
      toast.error("Total diners must be at least equal to claimed users");
      return;
    }
    
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="confirmationCode">Weekly Confirmation Code</Label>
        <div className="flex">
          <Input
            id="confirmationCode"
            name="confirmationCode"
            value={formData.confirmationCode}
            onChange={handleChange}
            placeholder="Enter 4-digit code"
            className="flex-1"
            maxLength={4}
            required
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Enter the 4-digit code provided for this week's promotions
        </p>
      </div>
      
      <div>
        <Label>Customer QR Codes</Label>
        <div className="border border-dashed border-gray-300 rounded-lg p-4 mb-2">
          <div className="flex flex-col items-center justify-center">
            <Camera className="h-8 w-8 text-gray-400 mb-2" />
            <Button 
              type="button" 
              onClick={handleScanQR}
              disabled={scannedUsers.length >= 3}
              className="w-full"
            >
              <Plus className="mr-2 h-4 w-4" /> Scan Customer QR
            </Button>
            <p className="text-xs text-gray-500 mt-2">
              Maximum 3 customers can redeem on one bill
            </p>
          </div>
        </div>
        
        {scannedUsers.length > 0 && (
          <div className="space-y-2 mt-2">
            <Label>Scanned Customers ({scannedUsers.length}/3)</Label>
            {scannedUsers.map((user, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span className="text-sm">Customer ID: {user}</span>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                  onClick={() => removeScannedUser(index)}
                >
                  &times;
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="totalBill">Total Bill Amount</Label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <Input
              id="totalBill"
              name="totalBill"
              type="number"
              value={formData.totalBill || ''}
              onChange={handleChange}
              placeholder="0.00"
              className="pl-10"
              min="0"
              step="0.01"
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="totalDiners">Total Diners</Label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <Input
              id="totalDiners"
              name="totalDiners"
              type="number"
              value={formData.totalDiners || ''}
              onChange={handleChange}
              placeholder="0"
              className="pl-10"
              min={formData.claimedUsers || 1}
              required
            />
          </div>
        </div>
      </div>
      
      <Button type="submit" className="w-full">
        Report Redemption
      </Button>
    </form>
  );
}
