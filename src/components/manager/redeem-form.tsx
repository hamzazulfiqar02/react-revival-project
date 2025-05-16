
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Redemption } from "../../types/restaurant";
import { toast } from "../../helpers/toast";
import { Label } from "../ui/label";
import { QRScanner } from "./redeem/qr-scanner";
import { CustomerList } from "./redeem/customer-list";
import { RedemptionFormFields } from "./redeem/redemption-form-fields";

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
  
  const handleScanSuccess = (userId: string) => {
    setScannedUsers([...scannedUsers, userId]);
    setFormData(prev => ({ 
      ...prev, 
      claimedUsers: (prev.claimedUsers || 0) + 1
    }));
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
      <RedemptionFormFields 
        formData={formData}
        onChange={handleChange}
        claimedUsers={formData.claimedUsers || 0}
      />
      
      <div>
        <Label>Customer QR Codes</Label>
        <QRScanner 
          scannedUsers={scannedUsers}
          onScanSuccess={handleScanSuccess}
        />
        
        <CustomerList
          scannedUsers={scannedUsers}
          onRemoveUser={removeScannedUser}
        />
      </div>
      
      <Button type="submit" className="w-full">
        Report Redemption
      </Button>
    </form>
  );
}
