import type React from "react";
import type { Metadata } from "next";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard - Super Mondays",
  description: "Restaurant partner dashboard for Super Mondays",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <div className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary fixed bottom-10 right-10 cursor-pointer">
        <MessageSquare color="white" fill="white" />
      </div>
    </div>
  );
}
