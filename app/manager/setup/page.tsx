"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { FormInput } from "@/components/common"

// Define validation schema using Yup
const RestaurantSetupSchema = Yup.object().shape({
  name: Yup.string().required("Restaurant name is required"),
  cuisine: Yup.string().required("Cuisine type is required"),
  address: Yup.string().required("Address is required"),
})

export default function RestaurantSetupPage() {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
    const file = event.currentTarget.files?.[0]
    if (file) {
      setFieldValue("logo", file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (
    values: { name: string; cuisine: string; address: string; logo?: File },
    { setSubmitting }: any,
  ) => {
    setError(null)
    setSuccess(null)

    try {
      // Here you would normally call your API to save restaurant details
      console.log("Restaurant setup with:", values)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, let's pretend setup succeeded
      setSuccess("Restaurant details saved successfully!")
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold">
            <span className="text-black">RESTAURANT-</span>
            <span className="text-primary">PARTNERS</span>
            <span className="text-black"> DASHBOARD</span>
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-6">Restaurant Setup & Chef Configuration</h2>

          {/* Progress indicator */}
          <div className="mb-8">
            <div className="h-2 w-full bg-gray-200 rounded-full">
              <div className="h-2 bg-primary rounded-full w-1/2"></div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">{error}</div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-600 rounded-md text-sm">
              {success}
            </div>
          )}

          <Formik
            initialValues={{ name: "", cuisine: "", address: "" }}
            validationSchema={RestaurantSetupSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                      {logoPreview ? (
                        <Image
                          src={logoPreview || "/placeholder.svg"}
                          alt="Restaurant logo"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-gray-400 text-xs text-center">No logo</div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleLogoChange(e, setFieldValue)}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label
                      htmlFor="logo-upload"
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md cursor-pointer hover:bg-gray-200 transition-colors text-sm"
                    >
                      Upload Logo
                    </label>
                  </div>
                </div>

                <FormInput name="name" placeholder="Enter restaurant name" label="Restaurant Name" />

                <FormInput name="cuisine" placeholder="Select cuisine type" label="Cuisine Type" />

                <FormInput name="address" placeholder="Enter restaurant address" label="Address" />

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "SAVE"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
