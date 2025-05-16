
import React from "react";
import { 
  LayoutDashboard, 
  Users, 
  Store, 
  Clock, 
  Settings, 
  FileText, 
  Calendar,
  BarChart2,
  QrCode,
  ListChecks
} from "lucide-react";

export const AdminNavItems = [
  {
    name: "Overview",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Restaurants",
    href: "/admin/restaurants",
    icon: Store,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    name: "Activity Logs",
    href: "/admin/activity-logs",
    icon: FileText,
  },
];

export const managerNavItems = [
  {
    name: "Overview",
    href: "/manager",
    icon: LayoutDashboard,
  },
  {
    name: "Deal Management",
    href: "/manager/deal-management",
    icon: Calendar,
  },
  {
    name: "Staff Management",
    href: "/manager/staff-management",
    icon: Users,
  },
  {
    name: "Report Redemption",
    href: "/manager/report-redemption",
    icon: QrCode,
  },
  {
    name: "Redemption History",
    href: "/manager/redemption-history",
    icon: ListChecks,
  },
];
