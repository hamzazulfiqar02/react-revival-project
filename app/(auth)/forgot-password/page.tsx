"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import AuthRoute from "@/components/auth-route";
import UserAuthLayout from "@/components/layouts/user-auth-layout";
import { Button } from "@/components/ui/button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormInput } from "@/components/common";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

function ForgotPasswordContent() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { resetPassword } = useAuth();

  const handleSubmit = async (
    values: { email: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setIsLoading(true);

    try {
      const { error, success } = await resetPassword(email);

      if (error) {
        setError(error.message);
      } else if (success) {
        setSubmitted(true);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UserAuthLayout>
      {!submitted ? (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-Gray900 mb-1">
              Forgot Password?
            </h2>
            <p className="text-[13px] text-Black50">
              A code will be sent to your registered email.
            </p>
          </div>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={schema}
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
                <Button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-70"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send reset link"}
                </Button>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Check your email</h2>
          <p className="text-gray-600 mb-6">
            We've sent a password reset link to{" "}
            <span className="font-medium">{email}</span>
          </p>
          <Link href="/login" className="text-primary font-medium">
            Return to login
          </Link>
        </div>
      )}

      <div className="mt-4 text-center">
        <p className="text-[13px] text-Black70">
          Back to{" "}
          <Link href="/login" className="text-primary font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </UserAuthLayout>
  );
}

export default function ForgotPasswordPage() {
  return (
    <AuthRoute>
      <ForgotPasswordContent />
    </AuthRoute>
  );
}
