import React from "react";
import { Icon } from "lucide-react"; // Importing types from lucide-react

export interface DashboardNavProps {
  name: string;
  href: string;
  icon: React.ComponentType<React.ComponentProps<typeof Icon>>; // Icon type from lucide-react
}