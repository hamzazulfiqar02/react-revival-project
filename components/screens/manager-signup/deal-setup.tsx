"use client";

import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ChevronDown, File, Handshake } from "lucide-react";
import { TimeSelector } from "./time-selector";
import { FormInput } from "@/components/common";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

// Validation schema for BOGO deal
const bogoValidationSchema = Yup.object({
  dealType: Yup.string().required("Deal type is required"),
  selectedDays: Yup.array().min(1, "Select at least one day"),
});

// Validation schema for Happy Hour deal
const happyHourValidationSchema = Yup.object({
  dealType: Yup.string().required("Deal type is required"),
  selectedDays: Yup.array().min(1, "Select at least one day"),
  startTime: Yup.string().required("Start time is required"),
  endTime: Yup.string().required("End time is required"),
  happyHourName: Yup.string().required("Happy hour name is required"),
});

export function DealSetup({ onHandleNext }: any) {
  const [dealType, setDealType] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const initialValues = {
    dealType: "",
    selectedDays: [],
    startTime: "",
    endTime: "",
    happyHourName: "",
  };

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getValidationSchema = (values: any) => {
    console.log("dealType", values?.dealType);
    return values?.dealType === "Happy Hour"
      ? happyHourValidationSchema
      : bogoValidationSchema;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema(dealType)}
      onSubmit={(values) => {
        console.log("values", values);
        onHandleNext()
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="space-y-6">
          {/* Deal Type Dropdown */}
          <div className="mb-6">
            <label
              htmlFor="dealType"
              className="block text-sm font-semibold mb-1"
            >
              Deal Type
            </label>
            <div className="relative">
              <div
                className="w-full h-11 pl-10 pr-3 py-2 border border-Gray200 rounded-md bg-Gray50 flex items-center justify-between cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <Handshake size={18} className="text-Gray600" />
                </div>
                <span
                  className={`text-sm ${
                    !values.dealType ? "text-gray-400" : ""
                  }`}
                >
                  {values.dealType || "Select Deal Type"}
                </span>
                <ChevronDown size={16} className="text-gray-500" />
              </div>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                  <div
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFieldValue("dealType", "BOGO");
                      setDealType("BOGO");
                      setIsDropdownOpen(!isDropdownOpen);
                    }}
                  >
                    BOGO
                  </div>
                  <div
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFieldValue("dealType", "Happy Hour");
                      setDealType("Happy Hour");
                      setIsDropdownOpen(!isDropdownOpen);
                    }}
                  >
                    Happy Hour
                  </div>
                </div>
              )}
              {errors.dealType && touched.dealType && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.dealType}
                </div>
              )}
            </div>
          </div>

          {/* Conditional fields based on deal type */}
          {values.dealType && (
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">
                Select Days
              </label>
              <div className="flex flex-wrap gap-4">
                {daysOfWeek.map((day) => (
                  <label
                    key={day}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <Field
                      type="checkbox"
                      name="selectedDays"
                      value={day}
                      className="form-checkbox h-5 w-5 text-primary !checked:bg-primary rounded-sm border-Gray50 bg-Gray200 focus:ring-primary"
                    />
                    <span className="text-[13px] text-Gray900">{day}</span>
                  </label>
                ))}
              </div>
              {errors.selectedDays && touched.selectedDays && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.selectedDays}
                </div>
              )}
            </div>
          )}

          {/* Happy Hour specific fields */}
          {values.dealType === "Happy Hour" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Start Time
                  </label>
                  <TimeSelector
                    name="startTime"
                    placeholder="Select Start Time"
                    value={values.startTime}
                    onChange={(time) => setFieldValue("startTime", time)}
                    error={
                      errors.startTime && touched.startTime
                        ? errors.startTime
                        : ""
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    End Time
                  </label>
                  <TimeSelector
                    name="endTime"
                    placeholder="Select End Time"
                    value={values.endTime}
                    onChange={(time) => setFieldValue("endTime", time)}
                    error={
                      errors.endTime && touched.endTime ? errors.endTime : ""
                    }
                  />
                </div>
              </div>

              <FormInput
                label="Happy Hour Name"
                name="happyHourName"
                placeholder='e.g. "50% off selected appetizers"'
                icon={<File className="text-Gray600" />}
              />
            </>
          )}

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
