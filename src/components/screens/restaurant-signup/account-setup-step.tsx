
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

const accountSetupSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  pin: Yup.string()
    .matches(/^[0-9]+$/, "PIN must contain only numbers")
    .length(4, 'PIN must be exactly 4 digits')
    .required('PIN is required'),
});

interface AccountSetupStepProps {
  onHandleNext: () => void;
}

export function AccountSetupStep({ onHandleNext }: AccountSetupStepProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Try to get previous data if exists
  const storedData = localStorage.getItem('restaurantAccountSetup');
  const initialValues = storedData ? JSON.parse(storedData) : {
    password: '',
    confirmPassword: '',
    pin: '',
  };

  const handleSubmit = (values: any) => {
    // Store form data in session/local storage for later use
    localStorage.setItem('restaurantAccountSetup', JSON.stringify(values));
    onHandleNext();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={accountSetupSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className={`w-full pr-10 pl-3 py-2 rounded-md border ${
                    errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-primary focus:border-primary`}
                  placeholder="Enter password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && touched.password && (
                <div className="text-red-500 text-xs mt-1">{String(errors.password)}</div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  className={`w-full pr-10 pl-3 py-2 rounded-md border ${
                    errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-primary focus:border-primary`}
                  placeholder="Confirm password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <div className="text-red-500 text-xs mt-1">{String(errors.confirmPassword)}</div>
              )}
            </div>
          </div>

          {/* PIN */}
          <div>
            <label htmlFor="pin" className="block text-sm font-medium text-gray-700 mb-1">
              PIN
            </label>
            <div className="relative">
              <input
                type="password"
                id="pin"
                name="pin"
                className={`w-full pl-3 pr-3 py-2 rounded-md border ${
                  errors.pin && touched.pin ? 'border-red-500' : 'border-gray-300'
                } focus:ring-primary focus:border-primary`}
                placeholder="4-digit PIN for login"
                maxLength={4}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pin}
              />
            </div>
            {errors.pin && touched.pin && (
              <div className="text-red-500 text-xs mt-1">{String(errors.pin)}</div>
            )}
          </div>

          <div className="mt-6">
            <Button 
              type="submit" 
              className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90"
            >
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
