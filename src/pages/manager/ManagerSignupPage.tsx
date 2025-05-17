
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserAuthLayout from '../../components/layouts/user-auth-layout';
import { Stepper } from '../../components/common';

// Import the step components
import { 
  BasicInfoStep,
  LocationInfoStep, 
  AccountSetupStep, 
  DealSetupStep, 
  MediaUploadStep 
} from '../../components/screens/restaurant-signup';

export default function ManagerSignupPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Basic Info",
    "Location Info",
    "Account Setup",
    "Deal Setup",
    "Media Upload",
  ];

  const getTitle = () => {
    if (currentStep === 0) {
      return "Sign up to get started!";
    }
    if (currentStep === 1) {
      return "Restaurant Location";
    }
    if (currentStep === 2) {
      return "Account Setup";
    }
    if (currentStep === 3) {
      return "Deal Setup";
    }
    return "Upload Media";
  };

  const onHandleNext = () => {
    if (currentStep === steps.length - 1) {
      // Final step completed, navigate to review page
      navigate('/manager/restaurant-review');
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  return (
    <UserAuthLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">{getTitle()}</h2>
        <p className="text-sm text-gray-500">
          Register your restaurant with Super Mondays
        </p>
      </div>

      <div className="mb-8 w-full">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>

      <div>
        {currentStep === 0 ? (
          <BasicInfoStep onHandleNext={onHandleNext} />
        ) : currentStep === 1 ? (
          <LocationInfoStep onHandleNext={onHandleNext} />
        ) : currentStep === 2 ? (
          <AccountSetupStep onHandleNext={onHandleNext} />
        ) : currentStep === 3 ? (
          <DealSetupStep onHandleNext={onHandleNext} />
        ) : (
          <MediaUploadStep onHandleNext={onHandleNext} />
        )}
      </div>
    </UserAuthLayout>
  );
}
