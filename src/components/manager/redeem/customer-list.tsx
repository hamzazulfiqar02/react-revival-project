
import React from "react";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";

interface CustomerListProps {
  scannedUsers: string[];
  onRemoveUser: (index: number) => void;
}

export function CustomerList({ scannedUsers, onRemoveUser }: CustomerListProps) {
  if (scannedUsers.length === 0) {
    return null;
  }
  
  return (
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
            onClick={() => onRemoveUser(index)}
          >
            &times;
          </Button>
        </div>
      ))}
    </div>
  );
}
