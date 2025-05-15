import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - Super Mondays",
  description: "Restaurant partner dashboard for Super Mondays",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
