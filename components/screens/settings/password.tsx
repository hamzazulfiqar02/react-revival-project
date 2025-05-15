import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Password validation schema
const PasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

const Password = () => {
  return (
    <div>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={PasswordSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="max-w-[450px] flex flex-col gap-10">
              <div>
                <label
                  htmlFor="currentPassword"
                  className="block text-xs font-poppins text-secondary-dark mb-2"
                >
                  Current Password
                </label>
                <Field
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                  placeholder="Enter Your Current Password"
                  className="w-full px-4 py-3 text-secondary-dark border border-inputBorder rounded-lg focus:outline-primary focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <ErrorMessage
                  name="currentPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-xs font-poppins text-secondary-dark mb-2"
                >
                  New Password
                </label>
                <Field
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  placeholder="Enter New Password"
                  className="w-full px-4 py-3 text-secondary-dark border border-inputBorder rounded-lg focus:outline-primary focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-poppins text-secondary-dark mb-2"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter Confirm Password"
                  className="w-full px-4 py-3 text-secondary-dark border border-inputBorder rounded-lg focus:outline-primary focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Password;
