
import React from "react";

interface StepperProps {
  steps: string[];
  currentStep: number;
  setCurrentStep: (val: number) => void;
}

export default function Stepper({
  steps,
  currentStep,
  setCurrentStep,
}: StepperProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div 
            className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium ${
              index === currentStep
                ? "bg-primary text-white"
                : index < currentStep
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setCurrentStep(index)}
            style={{ cursor: "pointer" }}
          >
            {index < currentStep ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              index + 1
            )}
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 h-0.5 w-full bg-gray-200 my-2 mx-2">
              <div
                className="h-full bg-primary"
                style={{
                  width: `${currentStep > index ? "100%" : "0%"}`,
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
