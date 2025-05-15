"use client"

import { useState } from "react"
import Link from "next/link"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import AuthLayout from "@/components/layouts/auth-layout"
import { FormInput } from "@/components/common"

// Define validation schema using Yup
const ForgotPinSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
})

export default function ForgotPinPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (values: { email: string }, { setSubmitting }: any) => {
    setError(null)

    try {
      // Here you would normally call your API to send a reset PIN email
      console.log("Reset PIN request for:", values.email)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmittedEmail(values.email)
      setSubmitted(true)
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AuthLayout
      subtitle="Forgot Your PIN?"
      description="Enter your email address and we'll send you instructions to reset your PIN"
    >
      {/* Error Message */}
      {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">{error}</div>}

      {!submitted ? (
        <Formik initialValues={{ email: "" }} validationSchema={ForgotPinSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <FormInput name="email" placeholder="Type here" label="Email" />

              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Reset Instructions"}
              </button>

              <div className="text-center mt-4">
                <Link href="/admin/login" className="text-primary text-sm">
                  Back to Login
                </Link>
              </div>
            </Form>
          )}
        </Formik>
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
            We've sent instructions to reset your PIN to <span className="font-medium">{submittedEmail}</span>
          </p>
          <Link href="/admin/login" className="text-primary font-medium">
            Return to login
          </Link>
        </div>
      )}
    </AuthLayout>
  )
}
