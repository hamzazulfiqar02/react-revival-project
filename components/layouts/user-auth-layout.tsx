"use client";

import React, { ReactNode } from "react";

const UserAuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex justify-center items-center font-poppins bg-review-bg">
      <div className="max-w-[500px] mx-auto p-6 rounded-lg  bg-white shadow-[0px_4.8px_16.8px_0px_#00000026]">
        {children}
      </div>
    </div>
  );
};

export default UserAuthLayout;
