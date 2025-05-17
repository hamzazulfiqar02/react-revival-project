
import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import UserAuthLayout from '@/components/layouts/user-auth-layout'
import { FormInput } from '@/components/common'
import { Button } from '@/components/ui/button'

// Define validation schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  pin: Yup.string()
    .required("PIN is required")
    .matches(/^[0-9]{4}$/, "PIN must be exactly 4 digits"),
})

export default function ManagerLoginPage() {
  const [error, setError] = React.useState<string | null>(null)

  const handleSubmit = async (
    values: { email: string; pin: string },
    { setSubmitting }: any
  ) => {
    setError(null)

    try {
      // Here you would normally call your API to authenticate
      console.log("Login attempt with:", values)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // For demo purposes, auto navigate to dashboard
      window.location.href = '/manager/overview'
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <UserAuthLayout>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-Gray900 mb-1">Restaurant Login</h2>
        <p className="text-[13px] text-Black50">
          Log in to manage your restaurant on Super Mondays
        </p>
      </div>

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
              <Link to="/manager/forgot-pin" className="text-primary text-sm font-semibold">
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

            <div className="text-center mt-4">
              <p className="text-sm text-Black70">
                Don't have an account yet?{" "}
                <Link to="/manager/signup" className="text-primary font-semibold">
                  Sign Up
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </UserAuthLayout>
  )
}
