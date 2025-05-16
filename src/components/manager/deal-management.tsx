
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { DealForm } from "./deal-form";
import { Deal } from "../../types/restaurant";
import { toast } from "../../helpers/toast";
import { PlusCircle, Edit2, Trash2, Check, X } from "lucide-react";

interface DealManagementProps {
  deals: Deal[];
  onAddDeal: (deal: Partial<Deal>) => Promise<Deal>;
  onUpdateDeal: (id: string, deal: Partial<Deal>) => Promise<Deal>;
  onDeleteDeal: (id: string) => Promise<boolean>;
}

export function DealManagement({ deals, onAddDeal, onUpdateDeal, onDeleteDeal }: DealManagementProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeDealType, setActiveDealType] = useState<'BOGO' | 'HAPPY_HOUR'>('BOGO');
  const [activeDeal, setActiveDeal] = useState<Deal | null>(null);
  
  const handleOpenAddDialog = (type: 'BOGO' | 'HAPPY_HOUR') => {
    setActiveDealType(type);
    setActiveDeal(null);
    setIsDialogOpen(true);
  };
  
  const handleOpenEditDialog = (deal: Deal) => {
    setActiveDealType(deal.type);
    setActiveDeal(deal);
    setIsDialogOpen(true);
  };
  
  const handleDealSubmit = async (dealData: Partial<Deal>) => {
    try {
      if (activeDeal) {
        await onUpdateDeal(activeDeal.id, dealData);
        toast.success('Deal updated successfully!');
      } else {
        await onAddDeal(dealData);
        toast.success('Deal added successfully!');
      }
      setIsDialogOpen(false);
    } catch (error) {
      toast.error('Failed to save deal.');
    }
  };
  
  const handleDeleteDeal = async (id: string) => {
    try {
      await onDeleteDeal(id);
      toast.success('Deal deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete deal.');
    }
  };

  const bogoDeals = deals.filter(deal => deal.type === 'BOGO');
  const happyHourDeals = deals.filter(deal => deal.type === 'HAPPY_HOUR');

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Deal Management</h1>
      
      <section className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">BOGO Deals</h2>
          <Button onClick={() => handleOpenAddDialog('BOGO')} className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" /> Add BOGO Deal
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bogoDeals.map((deal) => (
                <tr key={deal.id}>
                  <td className="px-4 py-3 text-sm">{deal.name}</td>
                  <td className="px-4 py-3 text-sm">{deal.description}</td>
                  <td className="px-4 py-3 text-sm">{deal.days.map(d => d.charAt(0).toUpperCase() + d.slice(1)).join(', ')}</td>
                  <td className="px-4 py-3 text-sm">
                    {deal.isActive ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Check className="w-3 h-3 mr-1" /> Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        <X className="w-3 h-3 mr-1" /> Inactive
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleOpenEditDialog(deal)}
                      className="h-8 w-8 p-0"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleDeleteDeal(deal.id)}
                      className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
              {bogoDeals.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-4 text-center text-sm text-gray-500">
                    No BOGO deals yet. Add your first one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Happy Hour Deals</h2>
          <Button onClick={() => handleOpenAddDialog('HAPPY_HOUR')} className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" /> Add Happy Hour
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {happyHourDeals.map((deal) => (
                <tr key={deal.id}>
                  <td className="px-4 py-3 text-sm">{deal.name}</td>
                  <td className="px-4 py-3 text-sm">{deal.description}</td>
                  <td className="px-4 py-3 text-sm">{deal.startTime} - {deal.endTime}</td>
                  <td className="px-4 py-3 text-sm">{deal.days.map(d => d.charAt(0).toUpperCase() + d.slice(1)).join(', ')}</td>
                  <td className="px-4 py-3 text-sm">
                    {deal.isActive ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Check className="w-3 h-3 mr-1" /> Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        <X className="w-3 h-3 mr-1" /> Inactive
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleOpenEditDialog(deal)}
                      className="h-8 w-8 p-0"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleDeleteDeal(deal.id)}
                      className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
              {happyHourDeals.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-4 text-center text-sm text-gray-500">
                    No Happy Hour deals yet. Add your first one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{activeDeal ? 'Edit Deal' : 'Add New Deal'}</DialogTitle>
          </DialogHeader>
          <DealForm
            type={activeDealType}
            onSubmit={handleDealSubmit}
            initialData={activeDeal || undefined}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
