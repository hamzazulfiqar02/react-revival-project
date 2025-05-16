
import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { CreditCard, Users } from "lucide-react";
import { Redemption } from "../../../types/restaurant";

interface RedemptionFormFieldsProps {
  formData: Partial<Redemption>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  claimedUsers: number;
}

export function RedemptionFormFields({ 
  formData, 
  onChange,
  claimedUsers
}: RedemptionFormFieldsProps) {
  return (
    <>
      <div>
        <Label htmlFor="confirmationCode">Weekly Confirmation Code</Label>
        <div className="flex">
          <Input
            id="confirmationCode"
            name="confirmationCode"
            value={formData.confirmationCode || ''}
            onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
              placeholder="0"
              className="pl-10"
              min={claimedUsers || 1}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
}
