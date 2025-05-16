
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Redemption } from "@/types/restaurant";
import { Camera, Upload } from "lucide-react";
import { toast } from "@/helpers/toast";

interface RedeemFormProps {
  onSubmit: (redemption: Partial<Redemption>) => void;
}

export function RedeemForm({ onSubmit }: RedeemFormProps) {
  const [formData, setFormData] = useState<Partial<Redemption>>({
    date: new Date().toISOString(),
    totalBill: 0,
    claimedUsers: 0,
    totalDiners: 0,
    confirmationCode: "",
  });
  
  const [receiptImage, setReceiptImage] = useState<File | null>(null);
  const [qrCodes, setQrCodes] = useState<string[]>([]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name.includes('total') ? parseFloat(value) : value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceiptImage(e.target.files[0]);
    }
  };
  
  const handleScanQR = () => {
    // In a real app, this would activate the camera and scan a QR code
    // For this demo, we'll just simulate adding a QR code
    if (qrCodes.length >= 3) {
      toast.error("Maximum of 3 QR codes allowed");
      return;
    }
    
    const mockQRCode = `USER-${Math.floor(1000 + Math.random() * 9000)}`;
    setQrCodes([...qrCodes, mockQRCode]);
    setFormData(prev => ({
      ...prev,
      claimedUsers: (prev.claimedUsers || 0) + 1
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate confirmation code (should be 4 digits)
    if (!/^\d{4}$/.test(formData.confirmationCode || "")) {
      toast.error("Please enter a valid 4-digit confirmation code");
      return;
    }
    
    // Check if today is Monday or Tuesday
    const today = new Date().getDay();
    if (today !== 1 && today !== 2) { // 1 is Monday, 2 is Tuesday
      toast.error("Redemptions are only allowed on Mondays and Tuesdays");
      return;
    }
    
    onSubmit({
      ...formData,
      claimedUsers: qrCodes.length,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="confirmationCode">Weekly Confirmation Code</Label>
        <Input
          id="confirmationCode"
          name="confirmationCode"
          value={formData.confirmationCode}
          onChange={handleChange}
          placeholder="Enter 4-digit code"
          maxLength={4}
          pattern="\d{4}"
          required
        />
        <p className="text-xs text-gray-500 mt-1">Enter the 4-digit code generated for this week</p>
      </div>
      
      <div>
        <Label htmlFor="totalBill">Total Bill Amount</Label>
        <Input
          id="totalBill"
          name="totalBill"
          type="number"
          min="0"
          step="0.01"
          value={formData.totalBill || ""}
          onChange={handleChange}
          placeholder="Enter total bill amount"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="totalDiners">Total Number of Diners</Label>
        <Input
          id="totalDiners"
          name="totalDiners"
          type="number"
          min="1"
          value={formData.totalDiners || ""}
          onChange={handleChange}
          placeholder="Enter number of diners"
          required
        />
      </div>
      
      <div>
        <Label>Scan Customer QR Codes (max 3)</Label>
        <div className="space-y-2">
          <Button 
            type="button" 
            onClick={handleScanQR}
            className="w-full flex items-center justify-center gap-2"
          >
            <Camera size={16} />
            Scan QR Code
          </Button>
          
          {qrCodes.length > 0 && (
            <div className="border rounded-md p-3 bg-gray-50">
              <p className="text-sm font-medium mb-2">Scanned QR Codes: {qrCodes.length}</p>
              <ul className="space-y-1">
                {qrCodes.map((code, index) => (
                  <li key={index} className="text-sm bg-white p-2 rounded border">
                    {code}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div>
        <Label htmlFor="receipt">Upload Receipt/Invoice</Label>
        <div className="border border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <label htmlFor="receipt" className="flex flex-col items-center justify-center cursor-pointer">
            <Upload className="h-6 w-6 text-gray-400" />
            <span className="mt-2 text-sm text-gray-500">
              {receiptImage ? receiptImage.name : "Click to upload receipt image"}
            </span>
            <Input
              id="receipt"
              name="receipt"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              required
            />
          </label>
        </div>
      </div>
      
      <Button type="submit" className="w-full">
        Submit Redemption
      </Button>
    </form>
  );
}
