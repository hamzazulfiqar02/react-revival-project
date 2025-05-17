
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserAuthLayout from '../../components/layouts/user-auth-layout';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

export default function RestaurantReviewPage() {
  const navigate = useNavigate();

  // Get restaurant data from local storage
  const basicInfo = JSON.parse(localStorage.getItem('restaurantBasicInfo') || '{}');
  const locationInfo = JSON.parse(localStorage.getItem('restaurantLocationInfo') || '{}');
  
  return (
    <UserAuthLayout>
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <div className="bg-primary/10 p-4 rounded-full">
            <Shield className="text-primary h-12 w-12" />
          </div>
        </div>
        <h1 className="text-2xl font-bold">Your restaurant is under review!</h1>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">1</div>
            <span className="text-sm font-medium">Restaurant Registration<br/>Complete</span>
          </div>
          <div className="flex-1 border-t-2 border-primary self-start mt-3 mx-2"></div>
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">2</div>
            <span className="text-sm font-medium">Admin Review<br/>In Progress</span>
          </div>
          <div className="flex-1 border-t-2 border-gray-300 self-start mt-3 mx-2"></div>
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-sm font-medium">3</div>
            <span className="text-sm font-medium">Restaurant<br/>Approval</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm text-gray-500 mb-1">Restaurant</h3>
            <p className="font-medium">{basicInfo.name || 'Not provided'}</p>
          </div>
          
          <div>
            <h3 className="text-sm text-gray-500 mb-1">Address</h3>
            <p className="font-medium">{locationInfo.address || 'Not provided'}</p>
          </div>
          
          <div>
            <h3 className="text-sm text-gray-500 mb-1">Phone</h3>
            <p className="font-medium">{basicInfo.phone || 'Not provided'}</p>
          </div>
          
          <div>
            <h3 className="text-sm text-gray-500 mb-1">Email</h3>
            <p className="font-medium">{basicInfo.email || 'Not provided'}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8">
        <p className="text-sm">
          If your restaurant is not approved within 48 hours, please contact our support team.
          Make sure all your documents are valid and properly uploaded.
        </p>
      </div>
      
      <Button 
        onClick={() => navigate('/manager/login')}
        className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90"
      >
        Contact Us
      </Button>
    </UserAuthLayout>
  );
}
