
import React from 'react';
import { Button } from "../ui/button";
import { Deal } from "../../types/restaurant";

interface DealManagementProps {
  deals: Deal[];
  onAddDeal: (deal: Partial<Deal>) => Promise<Deal>;
  onUpdateDeal: (id: string, deal: Partial<Deal>) => Promise<Deal>;
  onDeleteDeal: (id: string) => Promise<boolean>;
}

export function DealManagement({ deals, onAddDeal, onUpdateDeal, onDeleteDeal }: DealManagementProps) {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Deal Management</h1>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Restaurant Deals</h2>
        <Button>Add New Deal</Button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {deals.map((deal) => (
              <tr key={deal.id}>
                <td className="px-4 py-3 text-sm">{deal.name}</td>
                <td className="px-4 py-3 text-sm">{deal.type}</td>
                <td className="px-4 py-3 text-sm">{deal.description}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    deal.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {deal.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="destructive" size="sm">Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
            {deals.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-4 text-center text-sm text-gray-500">
                  No deals available. Add your first deal!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
