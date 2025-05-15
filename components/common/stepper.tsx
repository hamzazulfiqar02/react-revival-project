import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";
import { Stepper as FormStepper, Step } from "react-form-stepper";
// import { FormStepper, Step } from "@/components/ui/form-stepper";

// const formSteps = [
//   "Basic Info",
//   "Location Info",
//   "Account Setup",
//   "Deal Setup",
//   "Media Upload",
// ];

const formSteps = [
  { label: "Basic Info" },
  { label: "Location Info" },
  { label: "Account Setup" },
  { label: "Deal Setup" },
  { label: "Media Upload" },
];

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
      <FormStepper
        activeStep={currentStep}
        steps={formSteps}
        className="w-full flex items-center justify-between"
        styleConfig={{
          activeBgColor: "#CB2C70",
          activeTextColor: "#ffffff",
          completedBgColor: "#CB2C70",
          completedTextColor: "#ffffff",
          inactiveBgColor: "#E0E0E7",
          inactiveTextColor: "#E0E0E7",
          size: "16px",
          borderRadius: "50%",
          circleFontSize: "0px",
          labelFontSize: "0rem",
          fontWeight: 400,
        }}
        connectorStyleConfig={{
          activeColor: "#CB2C70",
          disabledColor: "#E0E0E7",
          completedColor: "#CB2C70",
          size: 2,
          style: "solid",
        }}
      >
        <Step label="Children Step 1" />
        <Step label="Children Step 2" />
        <Step label="Children Step 3" />
        <Step label="Children Step 4" />
        <Step label="Children Step 5" />
      </FormStepper>
    </div>
  );
}
