
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
    confirmationCode: '',
    totalBill: 0,
    claimedUsers: 0,
    totalDiners: 0,
    dealId: 'deal1', // Default value
    date: new Date().toISOString()
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const redemption = await onRedeemSubmit(formData);
      setSubmitSuccess(true);
      // Reset form after success
      setFormData({
        confirmationCode: '',
        totalBill: 0,
        claimedUsers: 0,
        totalDiners: 0,
        dealId: 'deal1',
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
      
      <div className="bg-white rounded-lg shadow-sm p-6 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="confirmationCode">Confirmation Code</Label>
            <Input
              id="confirmationCode"
              name="confirmationCode"
              value={formData.confirmationCode}
              onChange={handleChange}
              required
              placeholder="Enter the 4-digit code"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="totalBill">Total Bill Amount ($)</Label>
              <Input
                id="totalBill"
                name="totalBill"
                type="number"
                min="0"
                step="0.01"
                value={formData.totalBill}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dealId">Deal Type</Label>
              <select
                id="dealId"
                name="dealId"
                value={formData.dealId}
                onChange={(e) => setFormData(prev => ({ ...prev, dealId: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="deal1">BOGO Monday</option>
                <option value="deal2">Happy Hour</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="claimedUsers">Users Claiming Deal</Label>
              <Input
                id="claimedUsers"
                name="claimedUsers"
                type="number"
                min="0"
                max="3"
                value={formData.claimedUsers}
                onChange={handleChange}
                required
              />
              <p className="text-xs text-gray-500">Maximum 3 users per bill</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="totalDiners">Total Diners</Label>
              <Input
                id="totalDiners"
                name="totalDiners"
                type="number"
                min="1"
                value={formData.totalDiners}
                onChange={handleChange}
                required
              />
            </div>
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
            {isSubmitting ? "Submitting..." : "Report Redemption"}
          </Button>
        </form>
      </div>
    </div>
  );
}
