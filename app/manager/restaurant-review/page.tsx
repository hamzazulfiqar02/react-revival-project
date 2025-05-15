"use client";
import Image from "next/image";
import { Shield } from "lucide-react";
import { FormStepper, Step } from "@/components/ui/form-stepper";

export default function RestaurantReviewPage() {
  const formSteps = [
    "Restaurant Registration",
    "Admin Review",
    "Restaurant Approval",
  ];

  return (
    <div className="min-h-screen font-poppins relative overflow-hidden bg-review-bg">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Shield Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center">
            <Shield className="text-white w-8 h-8" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-center text-Black100 mb-10">
          Your restaurant is under review!
        </h1>

        {/* Stepper */}
        <div className="mb-10">
          <FormStepper
            activeStep={1}
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
              labelFontSize: "0.75rem",
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
            <Step
              label={
                <div className="flex flex-col items-center mt-2">
                  <span className="text-GraySecondary font-medium">
                    Restaurant Registration
                  </span>
                  <span className="text-xs text-GraySecondary">Complete</span>
                </div>
              }
            />
            <Step
              label={
                <div className="flex flex-col items-center mt-2">
                  <span className="text-[#CB2C70] font-medium">
                    Admin Review
                  </span>
                  <span className="text-xs text-[#CB2C70]">In Progress</span>
                </div>
              }
            />
            <Step
              label={
                <div className="flex flex-col items-center mt-2">
                  <span className="text-GraySecondary font-medium">
                    Restaurant
                  </span>
                  <span className="text-xs text-GraySecondary opacity-0">
                    Approval
                  </span>
                </div>
              }
            />
          </FormStepper>
        </div>

        {/* Restaurant Info Card */}
        <div className="bg-white rounded-lg shadow-[0px_4.8px_16.8px_0px_#00000026] p-8 md:p-12 mb-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 mb-4">
              <Image
                src="/images/avatar.png"
                alt="Restaurant Logo"
                width={96}
                height={96}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-[13px] text-Black60">Restaurant</div>
            <div className="text-[13px] text-right font-semibold text-Black80">
              Royal Taste Restaurant
            </div>

            <div className="text-[13px] text-Black60">Address</div>
            <div className="text-[13px] text-right font-semibold text-Black80">
              123 Food Street, Lahore
            </div>

            <div className="text-[13px] text-Black60">Phone</div>
            <div className="text-[13px] text-right font-semibold text-Black80">
              +92 300 1234567
            </div>

            <div className="text-[13px] text-Black60">Email</div>
            <div className="text-[13px] text-right font-semibold text-Black80">
              info@royaltaste.com
            </div>
          </div>

          {/* Notice */}
          <div className="mt-8 p-4 bg-[#fcf3f7] rounded-xl border-l border-primary text-[#051c2c] text-sm">
            <p className="text-xs text-Gray600">
              If your restaurant is not approved within 48 hours, please contact
              our support team. Make sure all your documents are valid and
              properly uploaded.
            </p>
          </div>
        </div>

        {/* Contact Button */}
        <button className="w-full text-xs font-bold py-3 border border-primary text-primary rounded-md hover:bg-[#fcf3f7] transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
}
