"use client";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import { FormInput } from "@/components/common";
import { User, Mail, Key, Plus, Asterisk } from "lucide-react";
import Link from "next/link";

// Define validation schema for a single staff member
const StaffMemberSchema = Yup.object().shape({
  name: Yup.string().required("Staff name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  pin: Yup.string()
    .required("PIN is required")
    .matches(/^[0-9]{4}$/, "PIN must be exactly 4 digits"),
});

// Define validation schema for the entire form
const AddStaffSchema = Yup.object().shape({
  staffMembers: Yup.array()
    .of(StaffMemberSchema)
    .min(1, "At least one staff member is required"),
});

interface StaffMember {
  name: string;
  email: string;
  pin: string;
}

interface Props {
  stepsLength: number;
  currentStep: number;
  setCurrentStep: (val: number) => void;
}

const AddStaff = ({ stepsLength, currentStep, setCurrentStep }: Props) => {
  const handleSubmit = async (
    values: { staffMembers: StaffMember[] },
    { setSubmitting }: any
  ) => {
    try {
      // Here you would normally call your API to register staff members
      console.log("Staff members submitted:", values.staffMembers);

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

  const handleSkip = () => {
    if (currentStep < stepsLength) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          staffMembers: [
            {
              name: "",
              email: "",
              pin: "",
            },
          ],
        }}
        validationSchema={AddStaffSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form className="space-y-4">
            <FieldArray name="staffMembers">
              {({ push, remove }) => (
                <>
                  {values.staffMembers.map((_, index) => (
                    <div key={index} className="space-y-4">
                      <FormInput
                        name={`staffMembers.${index}.name`}
                        placeholder="Enter full name"
                        label="Staff Name"
                        icon={<User size={18} className="text-Gray600" />}
                      />

                      <FormInput
                        name={`staffMembers.${index}.email`}
                        placeholder="Enter email address"
                        label="Staff Email"
                        icon={<Mail size={18} className="text-Gray600" />}
                      />

                      <FormInput
                        name={`staffMembers.${index}.pin`}
                        placeholder="4-digit PIN for login"
                        label="Staff Login Pin"
                        type="password"
                        icon={<Asterisk size={18} className="text-Gray600" />}
                        showPasswordToggle
                      />

                      {index < values.staffMembers.length - 1 && (
                        <div className="border-b border-gray-200 my-6"></div>
                      )}
                    </div>
                  ))}

                  {/* Buttons in a single row */}
                  <div className="flex gap-4 mt-4">
                    <button
                      type="button"
                      onClick={() =>
                        push({
                          name: "",
                          email: "",
                          pin: "",
                        })
                      }
                      className="text-xs flex-1 py-2.5 border border-primary text-primary font-medium rounded-md hover:bg-primary-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <Plus size={18} />
                      Add Another Staff Member
                    </button>

                    <button
                      type="submit"
                      className="text-xs  flex-1 py-2.5 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors disabled:opacity-70"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Submit for Approval"}
                    </button>
                  </div>
                </>
              )}
            </FieldArray>

            <div className="text-center mt-4">
              <Link
                href="/manager/login"
                className="text-primary font-semibold text-sm"
              >
                Skip for now
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddStaff;
