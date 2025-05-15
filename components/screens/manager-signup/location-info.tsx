"use client";

import type React from "react";

import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MapPin } from "lucide-react";
import { FormInput } from "@/components/common";
import { CuisineTypeSelect } from "./cusine-type-select";
import RestaurantProfileLogo from "./restaurant-profile-logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const validationSchema = Yup.object({
  location: Yup.string().required("Location is required"),
});

export function LocationInfo({ onHandleNext }: any) {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const initialValues = {
    location: "",
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
        <Form className="flex flex-col">
          <FormInput
            label="Location"
            name="location"
            placeholder="Enter your location"
            icon={<MapPin size={18} className="text-Gray600" />}
          />
          <div className="flex flex-col gap-6 mt-2">
            <div className="w-full h-[345px] relative">
              <Image
                src="/images/map.png"
                alt="Refer friends"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <Button
              type="submit"
              className="w-full py-4 bg-primary text-white font-medium rounded-2xl hover:bg-primary-dark transition-colors disabled:opacity-70"
            >
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
