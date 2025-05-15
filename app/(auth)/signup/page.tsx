"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Eye, EyeOff, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { createClient } from "@/lib/supabase/client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ErrorToast, SuccessToast } from "@/helpers/toast";
import AuthRoute from "@/components/auth-route";
import UserAuthLayout from "@/components/layouts/user-auth-layout";
import { FormInput } from "@/components/common";
import { Button } from "@/components/ui/button";

// Remove the createClient() call in the component and use it directly
const supabase = createClient();

// Define validation schema using Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

function SignupPageContent() {
  const { signUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (
    values: { name: string; email: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const { error, success } = await signUp(
        values.email,
        values.password,
        values.name
      );

      if (error) {
        ErrorToast(error.message);
      } else if (success) {
        SuccessToast("Account created successfully!");
        // Redirect is handled in the signUp function
      }
    } catch (err) {
      const errorMessage = "An unexpected error occurred. Please try again.";
      ErrorToast(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <UserAuthLayout>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-Gray900 mb-1">Sign Up</h2>
        <p className="text-[13px] text-Black50">
          Sign up to create an account and access exclusive deals
        </p>
      </div>

      {/* Signup Form with Formik */}
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="space-y-4">
            <FormInput
              name="name"
              placeholder="Type here"
              label="Full Name"
              icon={<User strokeWidth={1} size={18} className="text-Gray600" />}
            />

            <FormInput
              name="email"
              placeholder="Type here"
              label="Email"
              iconType="mail"
            />
            <FormInput
              name="password"
              placeholder="Enter your password"
              label="Password"
              iconType="key"
            />

            <Button
              type="submit"
              className="w-full py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </Button>
          </Form>
        )}
      </Formik>
      {/* Login Link */}
      <div className="mt-6 text-center">
        <p className="text-[13px] text-Black70">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-semibold underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </UserAuthLayout>
  );
}

export default function SignupPage() {
  return (
    <AuthRoute>
      <SignupPageContent />
    </AuthRoute>
  );
}
