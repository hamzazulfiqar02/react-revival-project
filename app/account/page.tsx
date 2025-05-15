"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import {
  DiningHistory,
  Password,
  Profile,
  Sidebar,
  Subscription,
} from "@/components/screens/settings";
import UserLayout from "@/components/layouts/user-layout";

export default function Account() {
  const [activeSection, setActiveSection] = useState("profile");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <UserLayout>
      <div>
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 font-el-messiri">
          Account <span className="text-primary">Settings</span>
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center italic text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary">
            Homepage
          </Link>
          <span className="mx-2">›</span>
          <span>Account</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <Sidebar
            activeSection={activeSection}
            handleSectionChange={handleSectionChange}
          />

          {/* Main Content */}
          <div className="flex-1">
            <Accordion
              type="single"
              className="!border-b-none"
              collapsible
              defaultValue={activeSection}
            >
              {/* Profile Section */}
              <AccordionItem
                value="profile"
                className={activeSection !== "profile" ? "hidden" : ""}
              >
                <AccordionContent forceMount>
                  <Profile />
                </AccordionContent>
              </AccordionItem>

              {/* Password Section */}
              <AccordionItem
                value="password"
                className={activeSection !== "password" ? "hidden" : ""}
              >
                <AccordionContent forceMount>
                  <Password />
                </AccordionContent>
              </AccordionItem>

              {/* Dining History */}
              <AccordionItem
                value="diningHistory"
                className={activeSection !== "diningHistory" ? "hidden" : ""}
              >
                <AccordionContent forceMount>
                  <DiningHistory />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
