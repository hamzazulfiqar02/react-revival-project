
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserAuthLayout from '@/components/layouts/user-auth-layout'
import { Stepper } from '@/components/common'

// Define the type for the onHandleNext prop
interface StepProps {
  onHandleNext: () => void;
}

// Since we don't have all the manager signup components set up, let's create some temporary placeholders
const BasicInfoStep: React.FC<StepProps> = ({ onHandleNext }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Restaurant Basic Information</h3>
    <div className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Restaurant Name</label>
        <input id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
      </div>
      <div>
        <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700">Cuisine Type</label>
        <select id="cuisine" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
          <option>Italian</option>
          <option>Chinese</option>
          <option>Mexican</option>
          <option>Indian</option>
          <option>American</option>
        </select>
      </div>
    </div>
    <button 
      onClick={onHandleNext} 
      className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
    >
      Continue
    </button>
  </div>
);

const LocationInfo: React.FC<StepProps> = ({ onHandleNext }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Restaurant Location</h3>
    <div className="space-y-4">
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input id="address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input id="phone" type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
      </div>
    </div>
    <button 
      onClick={onHandleNext} 
      className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
    >
      Continue
    </button>
  </div>
);

const AccountSetup: React.FC<StepProps> = ({ onHandleNext }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Account Setup</h3>
    <div className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input id="email" type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input id="password" type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
      </div>
    </div>
    <button 
      onClick={onHandleNext} 
      className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
    >
      Continue
    </button>
  </div>
);

const DealSetup: React.FC<StepProps> = ({ onHandleNext }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Deal Setup</h3>
    <div className="space-y-4">
      <div className="flex items-center">
        <input id="bogo-mon" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" defaultChecked />
        <label htmlFor="bogo-mon" className="ml-2 block text-sm text-gray-700">BOGO Monday (required)</label>
      </div>
      <div className="flex items-center">
        <input id="bogo-tue" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
        <label htmlFor="bogo-tue" className="ml-2 block text-sm text-gray-700">BOGO Tuesday (optional)</label>
      </div>
      <div>
        <label htmlFor="happy-hour" className="block text-sm font-medium text-gray-700">Happy Hour Times</label>
        <div className="flex space-x-2">
          <input id="happy-hour-start" type="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
          <span className="self-center">to</span>
          <input id="happy-hour-end" type="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
        </div>
      </div>
    </div>
    <button 
      onClick={onHandleNext} 
      className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
    >
      Continue
    </button>
  </div>
);

const UploadMedia: React.FC<StepProps> = ({ onHandleNext }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Upload Media</h3>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Restaurant Logo</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Menu (PDF)</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label htmlFor="menu-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark">
                <span>Upload a file</span>
                <input id="menu-upload" name="menu-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PDF up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
    <button 
      onClick={onHandleNext} 
      className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
    >
      Complete Registration
    </button>
  </div>
);

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
        <h2 className="text-xl font-semibold text-gray-900 mb-1">{getTitle()}</h2>
        <p className="text-[13px] text-gray-500">
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
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/manager/login" className="text-primary font-semibold">
            Log In
          </Link>
        </p>
      </div>
    </UserAuthLayout>
  )
}
