import React from "react";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormInput } from "@/components/common";
import { Asterisk } from "lucide-react";

// Define validation schema using Yup
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  pin: Yup.string()
    .required("PIN is required")
    .matches(/^[0-9]{4}$/, "PIN must be exactly 4 digits"),
});

interface Props {
  stepsLength: number;
  currentStep: number;
  setCurrentStep: (val: number) => void;
}

const PersonalInfo = ({ stepsLength, currentStep, setCurrentStep }: Props) => {
  const handleSubmit = async (
    values: { email: string; pin: string },
    { setSubmitting }: any
  ) => {
    try {
      // Here you would normally call your API to register the user
      console.log("Signup attempt with:", values);

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
    <div>
      <Formik
        initialValues={{ email: "", pin: "" }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <FormInput
              name="email"
              placeholder="Enter your email"
              label="Email"
              iconType="mail"
            />

            <FormInput
              name="pin"
              placeholder="Enter 4 digit pin"
              label="Pin"
              type="password"
              icon={<Asterisk size={18} className="text-Gray600" />}
              showPasswordToggle
            />

            <button
              type="submit"
              className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors disabled:opacity-70 mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Next"}
            </button>

            <div className="mt-4">
              <p className="text-sm text-Gray600">
                Already have an account?{" "}
                <Link
                  href="/manager/login"
                  className="text-primary font-semibold underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
