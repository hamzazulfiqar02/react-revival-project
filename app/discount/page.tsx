"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/common";
import Header from "@/components/common/header";
import { Button } from "@/components/ui/button";
import UserLayout from "@/components/layouts/user-layout";

const DiscountPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Format the expiration time (11:59 PM today)
  const expirationTime = new Date(currentTime);
  expirationTime.setHours(23, 59, 0, 0);

  return (
    <UserLayout className="!max-w-7xl">
      <div className="w-full flex flex-col items-center justify-center flex-grow">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-[53px] font-bold font-el-messiri mb-12">
            Discount <span className="text-primary">Applied!</span>
          </h1>

          <p className="max-w-[300px] text-xs font-semibold mx-auto text-Black70 mb-8">
            Show this QR code to the restaurant staff for verification.
          </p>

          <div className="mb-8 flex justify-center">
            <Image
              src="/images/qr-code.png"
              alt="QR Code"
              width={214}
              height={214}
              className="mx-auto"
            />
          </div>

          <p className="text-xs text-Black60 mb-12">
            Valid until 11:59 PM today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full text-xs font-semibold px-10 text-primary border-primary"
              >
                Home
              </Button>
            </Link>
            <Link href="/feedback" className="w-full sm:w-auto">
              <Button className="w-full text-xs font-semibold px-10 text-white bg-primary hover:bg-primary/90">
                Feedback
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default DiscountPage;
