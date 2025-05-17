
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { 
  Building, 
  User, 
  Phone, 
  Mail, 
  Globe, 
  Utensils, 
  Facebook, 
  Instagram 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoUploader } from './logo-uploader';

const basicInfoSchema = Yup.object({
  name: Yup.string().required('Restaurant name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  cuisineType: Yup.string().required('Cuisine type is required'),
  logo: Yup.mixed().required('Restaurant logo is required'),
  website: Yup.string().url('Must be a valid URL').nullable(),
  reservationUrl: Yup.string().url('Must be a valid URL').nullable(),
  facebookLink: Yup.string().url('Must be a valid URL').nullable(),
  instagramLink: Yup.string().url('Must be a valid URL').nullable(),
});

interface BasicInfoStepProps {
  onHandleNext: () => void;
}

export function BasicInfoStep({ onHandleNext }: BasicInfoStepProps) {
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const cuisineOptions = [
    { value: 'italian', label: 'Italian' },
    { value: 'chinese', label: 'Chinese' },
    { value: 'mexican', label: 'Mexican' },
    { value: 'indian', label: 'Indian' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'american', label: 'American' },
    { value: 'thai', label: 'Thai' },
    { value: 'mediterranean', label: 'Mediterranean' },
    { value: 'french', label: 'French' },
    { value: 'other', label: 'Other' }
  ];

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    cuisineType: '',
    logo: null,
    website: '',
    reservationUrl: '',
    facebookLink: '',
    instagramLink: '',
  };

  const handleSubmit = (values: any) => {
    // Store form data in session/local storage for later use
    localStorage.setItem('restaurantBasicInfo', JSON.stringify({...values, logo: logoFile ? logoFile.name : null }));
    onHandleNext();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={basicInfoSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, setFieldValue, handleChange, handleBlur, isValid, dirty }) => (
        <Form className="space-y-6">
          {/* Logo Upload */}
          <div className="mb-6">
            <LogoUploader 
              onLogoChange={(file) => {
                setLogoFile(file);
                setFieldValue('logo', file);
              }}
            />
            {errors.logo && touched.logo && (
              <div className="text-red-500 text-xs mt-1">{errors.logo as string}</div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Restaurant Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Restaurant Name *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <Building size={18} />
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full pl-10 pr-3 py-2 rounded-md border ${
                    errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-primary focus:border-primary`}
                  placeholder="Enter restaurant name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>
              {errors.name && touched.name && (
                <div className="text-red-500 text-xs mt-1">{errors.name}</div>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full pl-10 pr-3 py-2 rounded-md border ${
                    errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-primary focus:border-primary`}
                  placeholder="Enter email address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              {errors.email && touched.email && (
                <div className="text-red-500 text-xs mt-1">{errors.email}</div>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <Phone size={18} />
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`w-full pl-10 pr-3 py-2 rounded-md border ${
                    errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-primary focus:border-primary`}
                  placeholder="Enter phone number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
              </div>
              {errors.phone && touched.phone && (
                <div className="text-red-500 text-xs mt-1">{errors.phone}</div>
              )}
            </div>

            {/* Cuisine Type */}
            <div>
              <label htmlFor="cuisineType" className="block text-sm font-medium text-gray-700 mb-1">
                Cuisine Type *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <Utensils size={18} />
                </span>
                <select
                  id="cuisineType"
                  name="cuisineType"
                  className={`w-full pl-10 pr-3 py-2 rounded-md border appearance-none ${
                    errors.cuisineType && touched.cuisineType ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-primary focus:border-primary`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cuisineType}
                >
                  <option value="">Select cuisine type</option>
                  {cuisineOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              {errors.cuisineType && touched.cuisineType && (
                <div className="text-red-500 text-xs mt-1">{errors.cuisineType}</div>
              )}
            </div>

            {/* Website (optional) */}
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Website (optional)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <Globe size={18} />
                </span>
                <input
                  type="text"
                  id="website"
                  name="website"
                  className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                  placeholder="https://"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.website}
                />
              </div>
              {errors.website && touched.website && (
                <div className="text-red-500 text-xs mt-1">{errors.website}</div>
              )}
            </div>

            {/* Reservation URL (optional) */}
            <div>
              <label htmlFor="reservationUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Reservation URL (optional)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <Globe size={18} />
                </span>
                <input
                  type="text"
                  id="reservationUrl"
                  name="reservationUrl"
                  className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                  placeholder="https://"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.reservationUrl}
                />
              </div>
              {errors.reservationUrl && touched.reservationUrl && (
                <div className="text-red-500 text-xs mt-1">{errors.reservationUrl}</div>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Social Media (optional)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    <Facebook size={18} />
                  </span>
                  <input
                    type="text"
                    id="facebookLink"
                    name="facebookLink"
                    className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                    placeholder="Facebook"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.facebookLink}
                  />
                </div>
                {errors.facebookLink && touched.facebookLink && (
                  <div className="text-red-500 text-xs mt-1">{errors.facebookLink}</div>
                )}
              </div>

              <div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    <Instagram size={18} />
                  </span>
                  <input
                    type="text"
                    id="instagramLink"
                    name="instagramLink"
                    className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                    placeholder="Instagram"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.instagramLink}
                  />
                </div>
                {errors.instagramLink && touched.instagramLink && (
                  <div className="text-red-500 text-xs mt-1">{errors.instagramLink}</div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button 
              type="submit" 
              className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90"
            >
              Next
            </Button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/manager/login" className="text-primary font-medium">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
