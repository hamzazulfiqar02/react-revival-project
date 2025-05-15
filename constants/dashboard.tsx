import {
  Store,
  House,
  UserRound,
  Handshake,
  Soup,
  User,
  Calendar,
} from "lucide-react";

export const AdminNavItems = [
  {
    name: "Overview",
    href: "/admin/overview",
    icon: House,
  },
  {
    name: "User Management",
    href: "/admin/users",
    icon: UserRound,
  },
  {
    name: "Restaurant Management",
    href: "/admin/restaurants",
    icon: Store,
  },
  {
    name: "Activity Logs",
    href: "/admin/activity-logs",
    icon: Handshake,
  },
];

export const managerNavItems = [
  {
    name: "Overview",
    href: "/manager/overview",
    icon: House,
  },
  // {
  //   name: "Dishes",
  //   href: "/manager/dishes",
  //   icon: Soup,
  // },
  {
    name: "Deal Management",
    href: "/manager/deal-management",
    icon: Handshake,
  },
  {
    name: "Redemption View",
    href: "/manager/redemption-view",
    icon: Store,
  },
  {
    name: "Staff Management",
    href: "/manager/staff-management",
    icon: Store,
  },
];

// Manager
export const managerStatsData = [
  {
    title: "Active Promotions",
    value: "03",
    icon: <Handshake size={16} className="text-primary" />,
  },
  {
    title: "Scanned QR Codes",
    value: "05",
    icon: <Calendar size={16} className="text-primary" />,
  },
  {
    title: "Revenue",
    value: 5000,
    icon: <User size={16} className="text-primary" />,
  },
  {
    title: "Members Visit",
    value: "",
    icon: <User size={16} className="text-primary" />,
    additionalInfo: (
      <div className="flex flex-col text-sm">
        <div className="flex justify-between">
          <span className="text-sm text-Gray600 font-poppins">Weekly</span>
          <span className="text-sm font-poppins font-semibold text-Black100 ml-2">
            200
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-Gray600 font-poppins">Monthly</span>
          <span className="text-sm font-poppins font-semibold text-Black100 ml-2">
            800
          </span>
        </div>
      </div>
    ),
  },
];

export const managerRedemptionData = [
  {
    dealId: "#D88104",
    claimedUsers: 3,
    totalDinners: 8,
    totalBill: 112.5,
    dateTime: "01/Apr/2024 - 10:45 AM",
  },
  {
    dealId: "#D88104",
    claimedUsers: 1,
    totalDinners: 4,
    totalBill: 58.1,
    dateTime: "01/Apr/2024 - 10:45 AM",
  },
  {
    dealId: "#D88104",
    claimedUsers: 3,
    totalDinners: 6,
    totalBill: 176.25,
    dateTime: "01/Apr/2024 - 10:45 AM",
  },
  {
    dealId: "#D88104",
    claimedUsers: 3,
    totalDinners: 4,
    totalBill: 88.95,
    dateTime: "01/Apr/2024 - 10:45 AM",
  },
  {
    dealId: "#D88104",
    claimedUsers: 2,
    totalDinners: 8,
    totalBill: 98.1,
    dateTime: "01/Apr/2024 - 10:45 AM",
  },
  {
    dealId: "#D88104",
    claimedUsers: 1,
    totalDinners: 5,
    totalBill: 112.5,
    dateTime: "01/Apr/2024 - 10:45 AM",
  },
  {
    dealId: "#D88104",
    claimedUsers: 1,
    totalDinners: 3,
    totalBill: 88.1,
    dateTime: "01/Apr/2024 - 10:45 AM",
  },
  {
    dealId: "#D88104",
    claimedUsers: 3,
    totalDinners: 6,
    totalBill: 143.25,
    dateTime: "01/Apr/2024 - 10:45 AM",
  },
  {
    dealId: "#D88104",
    claimedUsers: 2,
    totalDinners: 5,
    totalBill: 83.64,
    dateTime: "01/Apr/2024 - 10:45 AM",
  },
  {
    dealId: "#D88104",
    claimedUsers: 3,
    totalDinners: 2,
    totalBill: 148.5,
    dateTime: "01/Apr/2024 - 10:45 AM",
  },
];

export const mockDishes = [
  {
    id: "1",
    name: "Churros",
    image: "/images/food-1.png",
    price: 12,
    cuisine: "European",
  },
  {
    id: "2",
    name: "Edamame",
    image: "/images/food-2.png",
    price: 12,
    cuisine: "Asian",
  },
  {
    id: "3",
    name: "Paella",
    image: "/images/food-3.png",
    price: 12,
    cuisine: "European",
  },
  {
    id: "4",
    name: "Pepper Pizza",
    image: "/images/food-4.png",
    price: 12,
    cuisine: "Italian",
  },
  {
    id: "5",
    name: "Sushi Platter",
    image: "/images/food-2.png",
    price: 18,
    cuisine: "Asian",
  },
  {
    id: "6",
    name: "Caesar Salad",
    image: "/images/food-3.png",
    price: 10,
    cuisine: "American",
  },
];

export const dealsData = [
  {
    id: 1,
    dealType: "Monday BOGO Meal",
    cuisineType: "Fine Dining",
    date: "12/Aug/2024",
    time: "10:45 AM - 09:30 PM",
    status: "Active",
  },
  {
    id: 2,
    dealType: "Monday BOGO Meal",
    cuisineType: "Casual",
    date: "12/Aug/2024",
    time: "10:45 AM - 09:30 PM",
    status: "Active",
  },
  {
    id: 3,
    dealType: "Monday BOGO Meal",
    cuisineType: "Bar and Wine",
    date: "12/Aug/2024",
    time: "10:45 AM - 09:30 PM",
    status: "Active",
  },
  {
    id: 4,
    dealType: "Monday BOGO Meal",
    cuisineType: "European",
    date: "12/Aug/2024",
    time: "10:45 AM - 09:30 PM",
    status: "Active",
  },
  {
    id: 5,
    dealType: "Monday BOGO Meal",
    cuisineType: "Asian",
    date: "12/Aug/2024",
    time: "10:45 AM - 09:30 PM",
    status: "Active",
  },
  {
    id: 6,
    dealType: "Happy Hours",
    cuisineType: "Asian",
    date: "12/Aug/2024",
    time: "10:45 AM - 09:30 PM",
    status: "Pending",
  },
  {
    id: 7,
    dealType: "Happy Hours",
    cuisineType: "Fine Dining",
    date: "12/Aug/2024",
    time: "10:45 AM - 09:30 PM",
    status: "Pending",
  },
  {
    id: 8,
    dealType: "Happy Hours",
    cuisineType: "Fine Dining",
    date: "12/Aug/2024",
    time: "10:45 AM - 09:30 PM",
    status: "Pending",
  },
  {
    id: 9,
    dealType: "Happy Hours",
    cuisineType: "Fine Dining",
    date: "12/Aug/2024",
    time: "10:45 AM - 09:30 PM",
    status: "Pending",
  },
  {
    id: 10,
    dealType: "Happy Hours",
    cuisineType: "Fine Dining",
    date: "12/Aug/2024",
    time: "10:45 AM - 09:30 PM",
    status: "Pending",
  },
];

const appetizerItems = [
  { value: "bruschetta", label: "Bruschetta" },
  { value: "calamari", label: "Calamari" },
  { value: "spring-rolls", label: "Spring Rolls" },
];

const dessertItems = [
  { value: "creme-brulee", label: "Crème Brûlée" },
  { value: "chocolate-souffle", label: "Chocolate Soufflé" },
  { value: "tiramisu", label: "Tiramisu" },
];

const mainCourseItems = [
  { value: "steak", label: "Steak" },
  { value: "salmon", label: "Salmon" },
  { value: "pasta", label: "Pasta" },
];

// Food categories with their suboptions
const foodCategories = [
  {
    value: "appetizers",
    label: "Appetizers",
    hasSubmenu: true,
    subOptions: appetizerItems,
  },
  {
    value: "desserts",
    label: "Desserts",
    hasSubmenu: true,
    subOptions: dessertItems,
  },
  {
    value: "main-courses",
    label: "Main Courses",
    hasSubmenu: true,
    subOptions: mainCourseItems,
  },
];

// Cuisine options with food categories as submenus


export const cuisineOptions = [
  {
    value: "fine-dining",
    label: "Fine Dining",
    hasSubmenu: true,
    subOptions: foodCategories,
  },
  {
    value: "casual",
    label: "Casual",
    hasSubmenu: true,
    subOptions: foodCategories,
  },
  {
    value: "bar-wine",
    label: "Bar and Wine",
    hasSubmenu: true,
    subOptions: foodCategories,
  },
  {
    value: "european",
    label: "European",
    hasSubmenu: true,
    subOptions: foodCategories,
  },
  {
    value: "pizza",
    label: "Pizza",
    hasSubmenu: true,
    subOptions: foodCategories,
  },
  {
    value: "asian",
    label: "Asian",
    hasSubmenu: true,
    subOptions: foodCategories,
  },
];

// Food items for each category
