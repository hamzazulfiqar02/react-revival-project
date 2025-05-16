
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Clock, Calendar } from "lucide-react";
import { Deal } from "@/types/restaurant";
import { DealForm } from "./deal-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/helpers/toast";

interface DealManagementProps {
  deals: Deal[];
  onAddDeal: (deal: Partial<Deal>) => void;
  onUpdateDeal: (id: string, deal: Partial<Deal>) => void;
  onDeleteDeal: (id: string) => void;
}

export function DealManagement({ deals, onAddDeal, onUpdateDeal, onDeleteDeal }: DealManagementProps) {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  
  const handleOpenDialog = (type: string, deal: Deal | null = null) => {
    setOpenDialog(type);
    setSelectedDeal(deal);
  };
  
  const handleCloseDialog = () => {
    setOpenDialog(null);
    setSelectedDeal(null);
  };
  
  const handleAddDeal = (deal: Partial<Deal>) => {
    onAddDeal(deal);
    toast.success(`${deal.type === 'BOGO' ? 'BOGO' : 'Happy Hour'} deal created successfully`);
    handleCloseDialog();
  };
  
  const handleUpdateDeal = (deal: Partial<Deal>) => {
    if (selectedDeal) {
      onUpdateDeal(selectedDeal.id, deal);
      toast.success(`${deal.type === 'BOGO' ? 'BOGO' : 'Happy Hour'} deal updated successfully`);
      handleCloseDialog();
    }
  };
  
  const handleDeleteDeal = (id: string, type: 'BOGO' | 'HAPPY_HOUR') => {
    onDeleteDeal(id);
    toast.success(`${type === 'BOGO' ? 'BOGO' : 'Happy Hour'} deal deleted successfully`);
  };
  
  const bogoDeals = deals.filter(deal => deal.type === 'BOGO');
  const happyHourDeals = deals.filter(deal => deal.type === 'HAPPY_HOUR');

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Deal Management</h1>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <Dialog open={openDialog === 'BOGO'} onOpenChange={(open) => !open && handleCloseDialog()}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog('BOGO')}>
              <Plus size={16} className="mr-2" />
              Add BOGO Deal
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedDeal ? "Edit BOGO Deal" : "Add New BOGO Deal"}</DialogTitle>
            </DialogHeader>
            <DealForm
              type="BOGO"
              onSubmit={selectedDeal ? handleUpdateDeal : handleAddDeal}
              initialData={selectedDeal || undefined}
            />
          </DialogContent>
        </Dialog>
        
        <Dialog open={openDialog === 'HAPPY_HOUR'} onOpenChange={(open) => !open && handleCloseDialog()}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog('HAPPY_HOUR')} variant="secondary">
              <Plus size={16} className="mr-2" />
              Add Happy Hour
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedDeal ? "Edit Happy Hour" : "Add New Happy Hour"}</DialogTitle>
            </DialogHeader>
            <DealForm
              type="HAPPY_HOUR"
              onSubmit={selectedDeal ? handleUpdateDeal : handleAddDeal}
              initialData={selectedDeal || undefined}
            />
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <h2 className="font-medium mb-4">BOGO Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bogoDeals.map((deal) => (
            <div key={deal.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between">
                <h3 className="font-medium">{deal.name}</h3>
                <div className="flex space-x-2">
                  <button 
                    className="text-blue-600 text-sm"
                    onClick={() => handleOpenDialog('BOGO', deal)}
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    className="text-red-600 text-sm"
                    onClick={() => handleDeleteDeal(deal.id, 'BOGO')}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{deal.description}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Calendar size={14} className="mr-1" />
                <span>
                  Valid on: {deal.days.map((day: string) => day.charAt(0).toUpperCase() + day.slice(1)).join(', ')}
                </span>
              </div>
              <div className="mt-2">
                <span className={`inline-block text-xs px-2 py-1 rounded ${
                  deal.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {deal.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          ))}
          {bogoDeals.length === 0 && (
            <div className="col-span-2 text-center py-10 text-gray-500">
              No BOGO deals yet. Add your first BOGO deal.
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="font-medium mb-4">Happy Hours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {happyHourDeals.map((deal) => (
            <div key={deal.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between">
                <h3 className="font-medium">{deal.name}</h3>
                <div className="flex space-x-2">
                  <button 
                    className="text-blue-600 text-sm"
                    onClick={() => handleOpenDialog('HAPPY_HOUR', deal)}
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    className="text-red-600 text-sm"
                    onClick={() => handleDeleteDeal(deal.id, 'HAPPY_HOUR')}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{deal.description}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Calendar size={14} className="mr-1" />
                <span>
                  Valid on: {deal.days.map((day: string) => day.charAt(0).toUpperCase() + day.slice(1)).join(', ')}
                </span>
              </div>
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <Clock size={14} className="mr-1" />
                <span>
                  {deal.startTime} - {deal.endTime}
                </span>
              </div>
              <div className="mt-2">
                <span className={`inline-block text-xs px-2 py-1 rounded ${
                  deal.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {deal.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          ))}
          {happyHourDeals.length === 0 && (
            <div className="col-span-2 text-center py-10 text-gray-500">
              No happy hour deals yet. Add your first happy hour.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
