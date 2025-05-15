"use client";

import { useState } from "react";
import AuthLayout from "@/components/layouts/auth-layout";
import { Stepper } from "@/components/common";
import {
  AccountSetup,
  AddStaff,
  BasicInfoStep,
  BusinessInfo,
  DealSetup,
  LocationInfo,
  MediaUpload,
  UploadMedia,
} from "@/components/screens/manager-signup";
import { useRouter } from "next/navigation";

export default function AdminSignupPage() {
  const router = useRouter();
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
      return "Restaurant Setup & Deal Configuration";
    }
    if (currentStep === 2) {
      return "Restaurant Setup & Deal Configuration";
    }
  };

  const onHandleNext = () => {
    if (currentStep === steps.length - 1) {
      router.push("/manager/restaurant-review");
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  return (
    <AuthLayout
      subtitle={getTitle()}
      description=""
      isHeader={true}
      className="!mx-auto"
    >
      <div className="mb-10 w-full">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>

      <div className="">
        {currentStep === 0 ? (
          <BasicInfoStep onHandleNext={onHandleNext} />
        ) : currentStep === 1 ? (
          <LocationInfo onHandleNext={onHandleNext} />
        ) : currentStep === 2 ? (
          <AccountSetup onHandleNext={onHandleNext} />
        ) : currentStep === 3 ? (
          <DealSetup onHandleNext={onHandleNext} />
        ) : (
          <UploadMedia onHandleNext={onHandleNext} />
        )}
      </div>
    </AuthLayout>
  );
}
