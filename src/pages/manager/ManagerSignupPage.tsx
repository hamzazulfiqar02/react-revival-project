
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserAuthLayout from '@/components/layouts/user-auth-layout'
import { Stepper } from '@/components/common'
import {
  BasicInfoStep,
  LocationInfo,
  AccountSetup,
  DealSetup,
  UploadMedia
} from '@/components/screens/manager-signup'

export default function ManagerSignupPage() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    "Basic Info",
    "Location Info",
    "Account Setup",
    "Deal Setup",
    "Media Upload",
  ]

  const getTitle = () => {
    if (currentStep === 0) {
      return "Sign up to get started!"
    }
    if (currentStep === 1) {
      return "Restaurant Setup & Deal Configuration"
    }
    if (currentStep === 2) {
      return "Restaurant Setup & Deal Configuration"
    }
    return "Restaurant Setup"
  }

  const onHandleNext = () => {
    if (currentStep === steps.length - 1) {
      // Navigate to review page or dashboard in real implementation
      window.location.href = '/manager/overview'
      return
    }
    setCurrentStep(currentStep + 1)
  }

  return (
    <UserAuthLayout>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-Gray900 mb-1">{getTitle()}</h2>
        <p className="text-[13px] text-Black50">
          Register your restaurant with Super Mondays
        </p>
      </div>

      <div className="mb-10 w-full">
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
          <LocationInfo onHandleNext={onHandleNext} />
        ) : currentStep === 2 ? (
          <AccountSetup onHandleNext={onHandleNext} />
        ) : currentStep === 3 ? (
          <DealSetup onHandleNext={onHandleNext} />
        ) : (
          <UploadMedia onHandleNext={onHandleNext} />
        )}
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-Black70">
          Already have an account?{" "}
          <Link to="/manager/login" className="text-primary font-semibold">
            Log In
          </Link>
        </p>
      </div>
    </UserAuthLayout>
  )
}
