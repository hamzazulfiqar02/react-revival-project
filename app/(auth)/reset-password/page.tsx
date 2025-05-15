"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { ErrorToast, SuccessToast } from "@/helpers/toast"

// Define validation schema using Yup
const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
})

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(true)
  const [validResetLink, setValidResetLink] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  // Check if the reset link is valid
  useEffect(() => {
    const checkResetLink = async () => {
      try {
        // The hash contains the access token when coming from a password reset link
        if (window.location.hash && window.location.hash.includes("access_token")) {
          console.log("Found access token in URL hash")

          // Verify the token by trying to get the user
          const { data, error } = await supabase.auth.getUser()

          if (error) {
            ErrorToast(`${error}`, )
            setValidResetLink(false)
          } else if (data?.user) {
            setValidResetLink(true)
          } else {
            ErrorToast("Invalid or expired password reset link. Please request a new one.")
            setValidResetLink(false)
          }
        } else {
          ErrorToast("Invalid or expired password reset link. Please request a new one.")
          setValidResetLink(false)
        }
      } catch (err) {
        ErrorToast(`${err}`)
        setValidResetLink(false)
      } finally {
        setLoading(false)
      }
    }

    checkResetLink()
  }, [supabase])

  const handleSubmit = async (
    values: { password: string; confirmPassword: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    setError(null)

    try {
      const { error: resetError } = await supabase.auth.updateUser({
        password: values.password,
      })

      if (resetError) {
        ErrorToast(`${resetError}`)
      } else {
        SuccessToast("Password updated successfully")
        setSuccess(true)
        setTimeout(() => {
          router.push("/login")
        }, 3000)
      }
    } catch (err) {
      ErrorToast(`${err}`, )
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <button onClick={() => router.push("/auth/login")} className="text-gray-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-center font-medium">Reset Password</h1>
        <div className="w-6"></div> {/* Spacer for centering */}
      </div>

      <div className="max-w-md mx-auto p-6">
        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">{error}</div>
        )}

        {!validResetLink ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Invalid Reset Link</h2>
            <p className="text-gray-600 mb-6">
              The password reset link is invalid or has expired. Please request a new one.
            </p>
            <Link href="/auth/forgot-password" className="text-primary font-medium">
              Request New Link
            </Link>
          </div>
        ) : success ? (
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
            <h2 className="text-xl font-semibold mb-2">Password Reset Successful</h2>
            <p className="text-gray-600 mb-6">
              Your password has been reset successfully. You will be redirected to the login page.
            </p>
            <Link href="/auth/login" className="text-primary font-medium">
              Go to Login
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-center mb-2">Create New Password</h2>
            <p className="text-center text-gray-600 mb-6">Please enter your new password below.</p>

            <Formik
              initialValues={{ password: "", confirmPassword: "" }}
              validationSchema={ResetPasswordSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <div className="relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className={`w-full px-3 py-2 border ${
                          errors.password && touched.password ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-1 focus:ring-primary`}
                        disabled={isSubmitting}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        disabled={isSubmitting}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                    <p className="text-xs text-gray-500 mt-1">
                      Password must be at least 8 characters with uppercase, lowercase, and number
                    </p>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Field
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        className={`w-full px-3 py-2 border ${
                          errors.confirmPassword && touched.confirmPassword ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-1 focus:ring-primary`}
                        disabled={isSubmitting}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        disabled={isSubmitting}
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Resetting Password..." : "Reset Password"}
                  </button>
                </Form>
              )}
            </Formik>
          </>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{" "}
            <Link href="/auth/login" className="text-primary font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
