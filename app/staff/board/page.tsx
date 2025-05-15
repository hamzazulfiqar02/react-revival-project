"use client";
import dynamic from "next/dynamic";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormInput } from "@/components/common";
import { PhoneNumberIcon } from "@/icons";
import AuthLayout from "@/components/layouts/auth-layout";
import { CameraIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
const ReactQRCode = dynamic(() => import("react-qr-code"), { ssr: false });

// Define validation schema using Yup
const BusinessInfoSchema = Yup.object().shape({
  noOfDinner: Yup.string().required("Number of dinner is required"),
  totalBill: Yup.string().required("Bill is required"),
  pin: Yup.string()
    .required("PIN is required")
    .matches(/^[0-9]{4}$/, "PIN must be exactly 4 digits"),
});

interface Props {
  stepsLength: number;
  currentStep: number;
  setCurrentStep: (val: number) => void;
}

const generateRandomCode = () => {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
};

const StaffBoard = ({ stepsLength, currentStep, setCurrentStep }: Props) => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrValue, setQrValue] = useState(generateRandomCode());

  const handleClick = () => {
    setShowQRCode(!showQRCode); // Toggle QR code visibility
  };

  const handleSubmit = async (
    values: {
      noOfDinner: string;
      totalBill: string;
      pin: string;
    },
    { setSubmitting }: any
  ) => {
    try {
      // Here you would normally call your API to register the restaurant info
      console.log("Business info submitted:", values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Move to the next step or complete the process
      if (currentStep < stepsLength) {
        setCurrentStep(currentStep + 1);
      } else {
        // For demo purposes, let's pretend registration succeeded
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      subtitle="Authenticate Diners"
      description="Effortlessly Streamline Your Management"
      isHeader={true}
      src="/images/staff-auth.png"
    >
      <div>
        <Formik
          initialValues={{
            noOfDinner: "",
            totalBill: "",
            pin: "",
          }}
          validationSchema={BusinessInfoSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <FormInput
                name="noOfDinner"
                placeholder="Enter Number of Dinners"
                label="No. of Dinner"
                icon={<PhoneNumberIcon />}
              />

              <FormInput
                name="totalBill"
                placeholder="Enter total bill"
                label={
                  <p>
                    Total bill
                    <span className="text-xs !font-normal text-Gray600">
                      (other discount)
                    </span>
                  </p>
                }
                icon={<PhoneNumberIcon />}
              />

              <FormInput
                name="pin"
                placeholder="Enter 4 digit pin"
                label="PIN"
                type="number"
                iconType="key"
              />

              <div className="rounded-2xl border-2 border-dashed border-neutral-100 bg-Gray50 p-4">
                {!showQRCode ? (
                  <div
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    onClick={handleClick}
                  >
                    <Image
                      src={"/images/qr-scanner.png"}
                      width={30}
                      height={30}
                      alt="QR"
                    />
                    <p className="text-xs font-semibold text-[#A3A3A3]">
                      Click to Scan QR
                    </p>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <ReactQRCode value={qrValue} size={60} />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant={"outline"}
                  className="flex-1 w-full text-xs py-2.5 border border-primary text-primary font-medium rounded-xl hover:bg-primary-50 transition-colors flex items-center justify-center gap-2"
                >
                  <CameraIcon size={18} />
                  Capture Invoice
                </Button>

                <Button
                  type="submit"
                  className="flex-1 text-xs font-semibold w-full py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  CONFIRM CLAIMED
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default StaffBoard;
