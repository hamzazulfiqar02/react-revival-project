"use client";

import { useState } from "react";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthLayout from "@/components/layouts/auth-layout";
import { FormInput } from "@/components/common";

// Define validation schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  pin: Yup.string()
    .required("PIN is required")
    .matches(/^[0-9]{4}$/, "PIN must be exactly 4 digits"),
});

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    values: { email: string; pin: string },
    { setSubmitting }: any
  ) => {
    setError(null);

    try {
      // Here you would normally call your API to authenticate
      console.log("Login attempt with:", values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes, let's pretend authentication failed
      setError("Invalid email or PIN. Please try again.");
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      subtitle="Log in to Authenticate Super Mondays Diners"
      description="Effortlessly Streamline Your Management"
      isHeader={true}
    >
      <div className="">
        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
            {error}
          </div>
        )}

        <Formik
          initialValues={{ email: "", pin: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <FormInput
                name="email"
                placeholder="Type here"
                label="Email"
                iconType="mail"
              />

              <FormInput
                name="pin"
                placeholder="Enter 4 digit pin"
                label="PIN"
                type="number"
                iconType="key"
              />

              <div className="flex justify-end !-mt-0 py-1">
                <Link href="/manager/forgot-pin" className="text-primary text-sm font-semibold">
                  Forgot Pin?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Log In"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
}
