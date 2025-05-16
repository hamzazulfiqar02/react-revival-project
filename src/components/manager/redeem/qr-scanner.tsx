
import React from "react";
import { Button } from "../../ui/button";
import { Camera, Plus } from "lucide-react";
import { toast } from "../../../helpers/toast";

interface QRScannerProps {
  scannedUsers: string[];
  onScanSuccess: (userId: string) => void;
}

export function QRScanner({ scannedUsers, onScanSuccess }: QRScannerProps) {
  const handleScanQR = () => {
    // In a real app, this would activate camera to scan QR code
    // For this mock-up, we'll simulate adding a user
    if (scannedUsers.length < 3) {
      const mockUserID = `user-${Math.floor(Math.random() * 1000)}`;
      onScanSuccess(mockUserID);
      toast.success("User QR code scanned successfully!");
    } else {
      toast.error("Maximum of 3 users can claim this deal");
    }
  };

  return (
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
  );
}
