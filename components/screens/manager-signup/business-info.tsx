"use client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormInput, FormSelect } from "@/components/common";
import {
  AddressIcon,
  CuisineTypeIcon,
  PhoneNumberIcon,
  RestaurantNameIcon,
} from "@/icons";

// Define validation schema using Yup
const BusinessInfoSchema = Yup.object().shape({
  restaurantName: Yup.string().required("Restaurant name is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  cuisineType: Yup.string().required("Cuisine type is required"),
  address: Yup.string().required("Address is required"),
});

interface Props {
  stepsLength: number;
  currentStep: number;
  setCurrentStep: (val: number) => void;
}

const BusinessInfo = ({ stepsLength, currentStep, setCurrentStep }: Props) => {
  const cuisineOptions = [
    { value: "italian", label: "Italian" },
    { value: "chinese", label: "Chinese" },
    { value: "mexican", label: "Mexican" },
    { value: "indian", label: "Indian" },
    { value: "japanese", label: "Japanese" },
    { value: "american", label: "American" },
    { value: "french", label: "French" },
    { value: "thai", label: "Thai" },
    { value: "mediterranean", label: "Mediterranean" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = async (
    values: {
      restaurantName: string;
      phoneNumber: string;
      cuisineType: string;
      address: string;
    },
    { setSubmitting }: any
  ) => {
    try {
      // Here you would normally call your API to register the restaurant info
      console.log("Business info submitted:", values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Move to the next step or complete the process
      if (currentStep < stepsLength) {
        setCurrentStep(currentStep + 1);
      } else {
        // For demo purposes, let's pretend registration succeeded
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          restaurantName: "",
          phoneNumber: "",
          cuisineType: "",
          address: "",
        }}
        validationSchema={BusinessInfoSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <FormInput
              name="restaurantName"
              placeholder="Enter restaurant name"
              label="Restaurant Name"
              icon={<RestaurantNameIcon />}
            />

            <FormInput
              name="phoneNumber"
              placeholder="Enter phone number"
              label="Phone Number"
              icon={<PhoneNumberIcon />}
            />

            <FormSelect
              name="cuisineType"
              placeholder="Select Cuisine Type"
              label="Cuisine Type"
              icon={<CuisineTypeIcon />}
              options={cuisineOptions}
            />

            <FormInput
              name="address"
              placeholder="Enter restaurant address"
              label="Address"
              icon={<AddressIcon />}
              multiline
              rows={4}
            />

            <button
              type="submit"
              className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors disabled:opacity-70 mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Next"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BusinessInfo;
