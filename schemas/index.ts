
// This file will contain schema definitions for the restaurant membership platform
// It will be expanded as needed for validation and type definitions

// Example restaurant schema
export const restaurantSchema = {
  id: '',
  name: '',
  logo: '',
  cuisineType: '',
  address: '',
  phoneNumber: '',
  email: '',
  website: '',
  reservationUrl: '',
  deals: []
}

// Example user schema
export const userSchema = {
  id: '',
  email: '',
  name: '',
  phoneNumber: '',
  favoritesRestaurants: [],
  redeemedDeals: []
}

// Example deal schema
export const dealSchema = {
  id: '',
  restaurantId: '',
  type: '', // BOGO, Happy Hour, etc.
  description: '',
  startDate: '',
  endDate: '',
  validDays: [],
  startTime: '',
  endTime: ''
}
