"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { X, User, Mail, Key, Eye, EyeOff, Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormInput } from "@/components/common";
import { Button } from "@/components/ui/button";

// Validation schema
const StaffMemberSchema = Yup.object().shape({
  staffMembers: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Staff name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      pin: Yup.string()
        .matches(/^\d{4}$/, "PIN must be exactly 4 digits")
        .required("PIN is required"),
    })
  ),
});

interface StaffMember {
  name: string;
  email: string;
  pin: string;
}

interface StaffMemberModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (staffMembers: StaffMember[]) => void;
}

export function StaffMemberModal({
  open,
  onOpenChange,
  onSave,
}: StaffMemberModalProps) {
  const [showPin, setShowPin] = useState<Record<number, boolean>>({});

  const togglePinVisibility = (index: number) => {
    setShowPin((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const initialValues = {
    staffMembers: [
      {
        name: "",
        email: "",
        pin: "",
      },
    ],
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogContent className="fixed left-[50%] top-[50%] max-h-[500px] overflow-y-auto w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          <div className="flex items-center justify-between mb-6">
            <DialogTitle className="text-xl font-semibold text-Gray900">
              Add Staff Member
            </DialogTitle>
            {/* <DialogClose className="rounded-full h-8 w-8 inline-flex items-center justify-center text-gray-500 hover:text-gray-700">
              <X size={20} />
            </DialogClose> */}
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={StaffMemberSchema}
            onSubmit={(values) => {
              onSave(values.staffMembers);
              onOpenChange(false);
            }}
          >
            {({ values, errors, touched }) => (
              <Form className="space-y-6">
                <FieldArray name="staffMembers">
                  {({ push, remove }) => (
                    <div className="space-y-6">
                      {values.staffMembers.map((_, index) => (
                        <div key={index} className="space-y-4">
                          {/* Staff Name */}
                          <FormInput
                            name={`staffMembers.${index}.name`}
                            placeholder="Type here"
                            label="Staff Name"
                            icon={<User size={16} />}
                          />

                          {/* Staff Email */}
                          <FormInput
                            name={`staffMembers.${index}.email`}
                            placeholder="Type here"
                            label="Staff Email"
                            iconType="mail"
                          />

                          {/* Staff Login Pin */}
                          <FormInput
                            name={`staffMembers.${index}.pin`}
                            type={"password"}
                            placeholder="4-digit PIN for login"
                            label="Staff Login Pin"
                            iconType="key"
                          />
                        </div>
                      ))}

                      <div className="flex gap-4 pt-2">
                        <Button
                          type="button"
                          variant={"outline"}
                          className="text-xs font-semibold flex-1 flex items-center rounded-xl justify-center gap-1 py-2 border border-[#CB2C70] text-[#CB2C70] hover:bg-[#CB2C70]/5 transition-colors"
                          onClick={() => push({ name: "", email: "", pin: "" })}
                        >
                          <Plus size={16} />
                          Add Another Staff Member
                        </Button>
                        <Button
                          type="submit"
                          className="text-xs font-semibold flex-1 py-2 bg-[#CB2C70] rounded-xl text-white hover:bg-[#CB2C70]/90 transition-colors"
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  )}
                </FieldArray>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
