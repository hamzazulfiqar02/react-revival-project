
import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Redemption } from './types';

interface RedeemReportingProps {
  onRedeemSubmit: (data: Partial<Redemption>) => Promise<Redemption>;
}

export function RedeemReporting({ onRedeemSubmit }: RedeemReportingProps) {
  const [formData, setFormData] = useState<Partial<Redemption>>({
    dealId: '',
    totalBill: 0,
    claimedUsers: 0,
    totalDiners: 0,
    confirmationCode: '',
    date: new Date().toISOString()
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'number' ? parseFloat(value) : value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      await onRedeemSubmit(formData);
      setSubmitSuccess(true);
      setFormData({
        dealId: '',
        totalBill: 0,
        claimedUsers: 0,
        totalDiners: 0,
        confirmationCode: '',
        date: new Date().toISOString()
      });
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (err) {
      setError('Failed to submit redemption. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Report Redemption</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="dealId">Deal</Label>
              <select
                id="dealId"
                name="dealId"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.dealId}
                onChange={handleChange}
                required
              >
                <option value="">Select Deal</option>
                <option value="deal1">BOGO Main Dish</option>
                <option value="deal2">Happy Hour Special</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmationCode">Confirmation Code</Label>
              <Input
                id="confirmationCode"
                name="confirmationCode"
                value={formData.confirmationCode}
                onChange={handleChange}
                required
                maxLength={4}
                placeholder="Enter 4-digit code"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="totalBill">Total Bill Amount</Label>
              <Input
                id="totalBill"
                name="totalBill"
                type="number"
                value={formData.totalBill?.toString()}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="claimedUsers">Claimed Users</Label>
              <Input
                id="claimedUsers"
                name="claimedUsers"
                type="number"
                value={formData.claimedUsers?.toString()}
                onChange={handleChange}
                required
                min="1"
                max="3"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="totalDiners">Total Diners</Label>
              <Input
                id="totalDiners"
                name="totalDiners"
                type="number"
                value={formData.totalDiners?.toString()}
                onChange={handleChange}
                required
                min="1"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="receiptImage">Receipt Image (Optional)</Label>
            <Input
              id="receiptImage"
              name="receiptImage"
              type="file"
              accept="image/*"
            />
          </div>
          
          {error && (
            <div className="px-4 py-3 bg-red-50 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          {submitSuccess && (
            <div className="px-4 py-3 bg-green-50 text-green-700 rounded-md">
              Redemption successfully reported!
            </div>
          )}
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit Redemption"}
          </Button>
        </form>
      </div>
    </div>
  );
}
