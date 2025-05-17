
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const locationInfoSchema = Yup.object({
  address: Yup.string().required('Address is required'),
});

interface LocationInfoStepProps {
  onHandleNext: () => void;
}

export function LocationInfoStep({ onHandleNext }: LocationInfoStepProps) {
  // Try to get previous data if exists
  const storedData = localStorage.getItem('restaurantLocationInfo');
  const initialValues = storedData ? JSON.parse(storedData) : {
    address: '',
  };

  const handleSubmit = (values: any) => {
    // Store form data in session/local storage for later use
    localStorage.setItem('restaurantLocationInfo', JSON.stringify(values));
    onHandleNext();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={locationInfoSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid }) => (
        <Form className="space-y-6">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Restaurant Location *
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <MapPin size={18} />
              </span>
              <input
                type="text"
                id="address"
                name="address"
                className={`w-full pl-10 pr-3 py-2 rounded-md border ${
                  errors.address && touched.address ? 'border-red-500' : 'border-gray-300'
                } focus:ring-primary focus:border-primary`}
                placeholder="Enter your restaurant location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
            </div>
            {errors.address && touched.address && (
              <div className="text-red-500 text-xs mt-1">{errors.address}</div>
            )}
          </div>

          {/* Map display area */}
          <div className="w-full h-[345px] relative rounded-lg overflow-hidden border border-gray-300">
            <div className="absolute inset-0 bg-gray-200">
              <img 
                src="/images/map.png" 
                alt="Map location" 
                className="w-full h-full object-cover" 
              />
            </div>
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
