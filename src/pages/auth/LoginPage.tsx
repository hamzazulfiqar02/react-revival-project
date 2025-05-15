
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/context/auth-context"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { ErrorToast, SuccessToast } from "@/helpers/toast"
import { FormInput } from "@/components/common"
import { Button } from "@/components/ui/button"
import UserAuthLayout from "@/components/layouts/user-auth-layout"
import AuthRoute from "@/components/auth-route"

// Define validation schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
})

function LoginPageContent() {
  const { signIn } = useAuth()

  const handleSubmit = async (
    values: { email: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const { error, success } = await signIn(values.email, values.password)

      if (error) {
        ErrorToast(error.message)
      } else if (success) {
        SuccessToast("Login Successfully")
      }
    } catch (err) {
      ErrorToast("An unexpected error occurred. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <UserAuthLayout>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-Gray900 mb-1">Login</h2>
        <p className="text-[13px] text-Black50">
          Log in to access your existing account
        </p>
      </div>
      {/* Login Form with Formik */}
      <Formik
        initialValues={{ email: "", password: "" }}
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
              name="password"
              placeholder="Enter your password"
              label="Password"
              iconType="key"
            />
            <div className="flex justify-end mt-1">
              <Link to="/forgot-password" className="text-xs text-primary">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-colors disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </Button>
          </Form>
        )}
      </Formik>

      {/* Sign Up Link */}
      <div className="mt-6 text-center">
        <p className="text-[13px] text-Black70">
          Don't Have an Account?{" "}
          <Link to="/signup" className="text-primary font-semibold underline">
            Signup
          </Link>
        </p>
      </div>
    </UserAuthLayout>
  )
}

export default function LoginPage() {
  return (
    <AuthRoute>
      <LoginPageContent />
    </AuthRoute>
  )
}
