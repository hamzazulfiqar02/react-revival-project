"use client";

import type React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Facebook, Instagram, MapPin, Globe, User, Phone } from "lucide-react";
import { FormInput } from "@/components/common";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import { CuisineTypeSelect } from "@/components/screens/manager-signup/cusine-type-select";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  cuisineType: Yup.string().required("Please select a cuisine type"),
  reservationUrl: Yup.string().url("Must be a valid URL").nullable(),
  facebookLink: Yup.string().url("Must be a valid URL").nullable(),
  instagramLink: Yup.string().url("Must be a valid URL").nullable(),
});

export default function SettingsPage() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    cuisineType: "",
    reservationUrl: "",
    facebookLink: "",
    instagramLink: "",
  };

  return (
    <DashboardLayout type={"manager"}>
      <div>
        <div className="pb-8">
          <p className="text-xl font-semibold text-Black100 mb-6">
            Manage your restaurant's information
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("values", values);
            }}
          >
            {({ setFieldValue, isValid, dirty }) => (
              <Form className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    label="Name"
                    name="name"
                    placeholder="Enter your email"
                    icon={<User size={18} className="text-Gray600" />}
                  />

                  <FormInput
                    label="Email"
                    name="email"
                    placeholder="Enter your email"
                    iconType="mail"
                  />

                  <FormInput
                    label="Phone"
                    name="phone"
                    placeholder="Enter your email"
                    icon={<Phone size={18} className="text-Gray600" />}
                  />

                  <FormInput
                    label="Address"
                    name="address"
                    placeholder="Enter restaurant address"
                    icon={<MapPin size={18} className="text-Gray600" />}
                  />

                  <CuisineTypeSelect label="Cuisine Type" name="cuisineType" />

                  <FormInput
                    label="Reservation URL (optional)"
                    name="reservationUrl"
                    placeholder="Enter restaurant phone number"
                    icon={<Globe size={18} className="text-Gray600" />}
                  />
                </div>
                <div className="w-full">
                  <h2 className="text-sm font-semibold mb-1">Social Link</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                      name="facebookLink"
                      placeholder="Facebook"
                      icon={<Facebook size={18} className="text-Gray600" />}
                    />

                    <FormInput
                      name="instagramLink"
                      placeholder="Instagram"
                      icon={<Instagram size={18} className="text-Gray600" />}
                    />
                  </div>
                </div>

                <div className="ml-auto">
                  <Button
                    type="submit"
                    className="px-14 y-4 bg-primary text-white font-medium rounded-2xl hover:bg-primary-dark transition-colors disabled:opacity-70"
                  >
                    Next
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </DashboardLayout>
  );
}
