"use client";

import type React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Asterisk } from "lucide-react";
import { FormInput } from "@/components/common";

import { Button } from "@/components/ui/button";

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  pin: Yup.string()
    .required("PIN is required")
    .matches(/^[0-9]{4}$/, "PIN must be exactly 4 digits"),
});

export function AccountSetup({ onHandleNext }: any) {
  const initialValues = {
    password: "",
    confirmPassword: "",
    pin: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onHandleNext();
      }}
    >
      {({ setFieldValue, isValid, dirty }) => (
        <Form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Password"
              name="password"
              placeholder="Enter your password"
              type="password"
              icon={<Asterisk size={18} className="text-Gray600" />}
              showPasswordToggle
            />

            <FormInput
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Enter your confirm password"
              type="password"
              icon={<Asterisk size={18} className="text-Gray600" />}
              showPasswordToggle
            />
          </div>

          <FormInput
            label="Pin"
            name="pin"
            placeholder="Enter your pin"
            type="password"
            icon={<Asterisk size={18} className="text-Gray600" />}
            showPasswordToggle
          />

          <Button
            type="submit"
            className="w-full py-4 bg-primary text-white font-medium rounded-2xl hover:bg-primary-dark transition-colors disabled:opacity-70"
          >
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
}
