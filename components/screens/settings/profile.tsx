import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

// Profile validation schema
const ProfileSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  timeFormat: Yup.string().required("Time format is required"),
  dateFormat: Yup.string().required("Date format is required"),
});

const Profile = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "Morty Smith",
          email: "morty.smith@example.com",
          timeFormat: "12h (am/pm)",
          dateFormat: "MM/DD/YYYY",
        }}
        validationSchema={ProfileSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-8 flex justify-start">
              <div className="relative flex flex-row gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden p-1 border-2 border-primary-lightest">
                  <Image
                    src={"/profile.png"}
                    alt="Profile"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 flex justify- items-center gap-2">
                  <Button
                    type="button"
                    className="!text-sm text-secondary-dark border border-secondary-dark rounded-full px-3 py-1 bg-transparent hover:bg-transparent"
                  >
                    Update
                  </Button>
                  <Button
                    type="button"
                    className="!text-sm text-secondary-dark px-3 py-1 bg-transparent hover:bg-transparent flex items-center"
                  >
                    <Trash2 size={16} /> Remove
                  </Button>
                </div>
              </div>
            </div>

            <div className="max-w-[450px] flex flex-col gap-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-poppins text-secondary-dark mb-2"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 text-secondary-dark border border-inputBorder rounded-lg focus:outline-primary focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-poppins text-secondary-dark mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-3 text-secondary-dark border border-inputBorder rounded-lg focus:outline-primary focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="timeFormat"
                    className="block text-xs font-poppins text-secondary-dark mb-2"
                  >
                    Time Format
                  </label>
                  <Field
                    as="select"
                    name="timeFormat"
                    id="timeFormat"
                    className="w-full px-4 py-3 text-secondary-dark border border-inputBorder rounded-lg focus:outline-primary focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                  >
                    <option value="12h (am/pm)">12h (am/pm)</option>
                    <option value="24h">24h</option>
                  </Field>
                  <ErrorMessage
                    name="timeFormat"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="dateFormat"
                    className="block text-xs font-poppins text-secondary-dark mb-2"
                  >
                    Date Format
                  </label>
                  <Field
                    as="select"
                    name="dateFormat"
                    id="dateFormat"
                    className="w-full px-4 py-3 text-secondary-dark border border-inputBorder rounded-lg focus:outline-primary focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                  >
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </Field>
                  <ErrorMessage
                    name="dateFormat"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between flex-wrap gap-4 mt-14">
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-6 py-2 text-xs rounded-xl hover:bg-primary transition-colors"
                >
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  className="border border-Black60 px-6 py-2 text-xs rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </Button>
              </div>
              <Button
                variant="outline"
                className="text-primary border border-primary px-4 py-2 text-xs rounded-xl transition-colors"
              >
                Delete Account
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
