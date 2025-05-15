import React, { ReactNode } from "react";
import { Footer, Header } from "../common";
import BottomNavigation from "../bottom-navigation";

interface Props {
  children: ReactNode;
  className?: string;
}

const UserLayout = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`min-h-screen bg-white max-w-6xl mx-auto px-4 pb-16 md:pb-0 flex flex-col gap-8 md:gap-16 my-6 ${className}`}
    >
      {/* Header */}
      <Header />

      <main className="h-full flex-1">{children}</main>

      {/* Footer */}
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default UserLayout;
