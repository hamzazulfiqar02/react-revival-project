
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Redemption } from '../../types/restaurant';

interface RedeemReportingProps {
  onRedeemSubmit: (data: Partial<Redemption>) => Promise<Redemption>;
}

export function RedeemReporting({ onRedeemSubmit }: RedeemReportingProps) {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [totalBill, setTotalBill] = useState('');
  const [claimedUsers, setClaimedUsers] = useState('1');
  const [totalDiners, setTotalDiners] = useState('2');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      await onRedeemSubmit({
        dealId: 'deal1', // Default deal ID
        date: new Date().toISOString(),
        totalBill: parseFloat(totalBill),
        claimedUsers: parseInt(claimedUsers, 10),
        totalDiners: parseInt(totalDiners, 10),
        confirmationCode
      });
      
      // Reset form
      setConfirmationCode('');
      setTotalBill('');
      setClaimedUsers('1');
      setTotalDiners('2');
      
      alert('Redemption reported successfully!');
    } catch (error) {
      alert('Error reporting redemption');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Report Redemption</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="confirmationCode" className="text-sm font-medium">Confirmation Code</label>
            <Input 
              id="confirmationCode"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
              placeholder="Enter 4-digit code"
              maxLength={4}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="totalBill" className="text-sm font-medium">Total Bill Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
              <Input 
                id="totalBill"
                value={totalBill}
                onChange={(e) => setTotalBill(e.target.value)}
                placeholder="0.00"
                className="pl-8"
                type="number"
                step="0.01"
                min="0"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="claimedUsers" className="text-sm font-medium">Claimed Users</label>
              <Input 
                id="claimedUsers"
                value={claimedUsers}
                onChange={(e) => setClaimedUsers(e.target.value)}
                type="number"
                min="0"
                max="3"
                required
              />
              <p className="text-xs text-gray-500">Max 3 users per bill</p>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="totalDiners" className="text-sm font-medium">Total Diners</label>
              <Input 
                id="totalDiners"
                value={totalDiners}
                onChange={(e) => setTotalDiners(e.target.value)}
                type="number"
                min="1"
                required
              />
            </div>
          </div>
          
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Submitting...' : 'Report Redemption'}
          </Button>
        </form>
      </div>
    </div>
  );
}
