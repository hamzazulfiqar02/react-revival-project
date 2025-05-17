
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ChevronDown, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const dealSetupSchema = Yup.object({
  dealType: Yup.string().required('Deal type is required'),
  selectedDays: Yup.array().min(1, 'At least one day must be selected'),
  startTime: Yup.string().when('dealType', {
    is: 'HAPPY_HOUR',
    then: () => Yup.string().required('Start time is required'),
    otherwise: () => Yup.string(),
  }),
  endTime: Yup.string().when('dealType', {
    is: 'HAPPY_HOUR',
    then: () => Yup.string().required('End time is required'),
    otherwise: () => Yup.string(),
  }),
  happyHourName: Yup.string().when('dealType', {
    is: 'HAPPY_HOUR',
    then: () => Yup.string().required('Happy hour name is required'),
    otherwise: () => Yup.string(),
  }),
});

interface DealSetupStepProps {
  onHandleNext: () => void;
}

export function DealSetupStep({ onHandleNext }: DealSetupStepProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Try to get previous data if exists
  const storedData = localStorage.getItem('restaurantDealSetup');
  const initialValues = storedData ? JSON.parse(storedData) : {
    dealType: '',
    selectedDays: ['mon'],  // Monday is required by default
    startTime: '',
    endTime: '',
    happyHourName: '',
  };

  const daysOfWeek = [
    { id: 'mon', label: 'Mon' },
    { id: 'tue', label: 'Tue' },
    { id: 'wed', label: 'Wed' },
    { id: 'thu', label: 'Thu' },
    { id: 'fri', label: 'Fri' },
    { id: 'sat', label: 'Sat' },
    { id: 'sun', label: 'Sun' }
  ];

  const handleSubmit = (values: any) => {
    // Store form data in session/local storage for later use
    localStorage.setItem('restaurantDealSetup', JSON.stringify(values));
    onHandleNext();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={dealSetupSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, setFieldValue }) => (
        <Form className="space-y-6">
          {/* Deal Type Dropdown */}
          <div>
            <label htmlFor="dealType" className="block text-sm font-medium text-gray-700 mb-1">
              Deal Type *
            </label>
            <div className="relative">
              <div
                className={`w-full pl-3 pr-10 py-2 rounded-md border ${
                  errors.dealType && touched.dealType ? 'border-red-500' : 'border-gray-300'
                } flex items-center justify-between cursor-pointer`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className={!values.dealType ? 'text-gray-400' : ''}>
                  {values.dealType ? (values.dealType === 'BOGO' ? 'BOGO' : 'Happy Hour') : 'Select Deal Type'}
                </span>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                  <div
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFieldValue('dealType', 'BOGO');
                      setIsDropdownOpen(false);
                    }}
                  >
                    BOGO
                  </div>
                  <div
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFieldValue('dealType', 'HAPPY_HOUR');
                      setIsDropdownOpen(false);
                    }}
                  >
                    Happy Hour
                  </div>
                </div>
              )}
              {errors.dealType && touched.dealType && (
                <div className="text-red-500 text-xs mt-1">{errors.dealType}</div>
              )}
            </div>
          </div>

          {/* Days selection - visible when deal type is selected */}
          {values.dealType && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Days *
              </label>
              <div className="flex flex-wrap gap-3">
                {daysOfWeek.map((day) => {
                  const isSelected = values.selectedDays.includes(day.id);
                  const isMondayAndRequired = day.id === 'mon';
                  
                  return (
                    <div 
                      key={day.id}
                      onClick={() => {
                        if (isMondayAndRequired) return; // Monday is always selected and can't be deselected
                        
                        const newSelectedDays = isSelected
                          ? values.selectedDays.filter((d: string) => d !== day.id)
                          : [...values.selectedDays, day.id];
                        
                        setFieldValue('selectedDays', newSelectedDays);
                      }}
                      className={`
                        px-4 py-2 rounded-md cursor-pointer text-sm
                        ${isSelected 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                        ${isMondayAndRequired ? 'opacity-70 cursor-not-allowed' : ''}
                      `}
                    >
                      {day.label}
                    </div>
                  );
                })}
              </div>
              {errors.selectedDays && touched.selectedDays && (
                <div className="text-red-500 text-xs mt-1">{errors.selectedDays as string}</div>
              )}
            </div>
          )}

          {/* Happy Hour specific fields */}
          {values.dealType === 'HAPPY_HOUR' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Start Time */}
                <div>
                  <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Start Time *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      <Clock size={18} />
                    </span>
                    <input
                      type="time"
                      id="startTime"
                      name="startTime"
                      className={`w-full pl-10 pr-3 py-2 rounded-md border ${
                        errors.startTime && touched.startTime ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-primary focus:border-primary`}
                      onChange={handleChange}
                      value={values.startTime}
                    />
                  </div>
                  {errors.startTime && touched.startTime && (
                    <div className="text-red-500 text-xs mt-1">{errors.startTime}</div>
                  )}
                </div>

                {/* End Time */}
                <div>
                  <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
                    End Time *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      <Clock size={18} />
                    </span>
                    <input
                      type="time"
                      id="endTime"
                      name="endTime"
                      className={`w-full pl-10 pr-3 py-2 rounded-md border ${
                        errors.endTime && touched.endTime ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-primary focus:border-primary`}
                      onChange={handleChange}
                      value={values.endTime}
                    />
                  </div>
                  {errors.endTime && touched.endTime && (
                    <div className="text-red-500 text-xs mt-1">{errors.endTime}</div>
                  )}
                </div>
              </div>

              {/* Happy Hour Name */}
              <div>
                <label htmlFor="happyHourName" className="block text-sm font-medium text-gray-700 mb-1">
                  Happy Hour Name *
                </label>
                <input
                  type="text"
                  id="happyHourName"
                  name="happyHourName"
                  className={`w-full px-3 py-2 rounded-md border ${
                    errors.happyHourName && touched.happyHourName ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-primary focus:border-primary`}
                  placeholder='e.g. "50% off selected appetizers"'
                  onChange={handleChange}
                  value={values.happyHourName}
                />
                {errors.happyHourName && touched.happyHourName && (
                  <div className="text-red-500 text-xs mt-1">{errors.happyHourName}</div>
                )}
              </div>
            </>
          )}

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
