"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, MapPin } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/context/auth-context";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { QRCodeModal } from "../screens/restaurant-detail/qr-code-modal";

export default function Header() {
  const isMobile = useMobile();
  const { user, loading } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    // Add event listener when dropdown is shown
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="py-2 px-4 sm:px-6 flex items-center justify-between rounded-full shadow-lg border border-Black0">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/super-mondays-logo.png"
              alt="Super Mondays Logo"
              width={isMobile ? 40 : 50}
              height={isMobile ? 50 : 60}
            />
          </Link>
        </div>

        <div className="md:flex items-center hidden">
          <MapPin size={18} className="text-primary mr-2" />
          <span className="text-sm font-poppins text-Black90">
            California 445 Rd
          </span>
        </div>

        <div className="relative flex items-center gap-2 sm:gap-4">
          <button className="text-black hover:text-primary transition-colors relative">
            <Bell className="w-6 h-6 text-Gray600" />
          </button>
          <div
            ref={profileRef}
            className="flex items-center cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={
                  user?.user_metadata?.avatar_url ||
                  "/images/profile-picture.png"
                }
                alt="User profile"
                width={isMobile ? 40 : 60}
                height={isMobile ? 40 : 60}
                className="object-cover"
              />
            </div>
          </div>

          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute right-5 top-10 w-48 bg-white rounded-lg shadow-lg z-50 border border-gray-100"
            >
              <div className="block px-8 py-2.5">
                <p className="text-xs text-Black60">Morning</p>
                <p className="text-base font-semibold text-Black800 mt-1.5">
                  Morty Smith
                </p>
              </div>
              <div className="border-t border-Gray50 my-1"></div>

              <div
                className="block px-8 py-2.5 text-base text-Gray700 hover:bg-primary-lightest"
                onClick={() => setIsModalOpen(true)}
              >
                My QR
              </div>
              <Link
                href="/deals"
                className="block px-8 py-2.5 text-base text-Gray700 hover:bg-primary-lightest"
              >
                My Deals
              </Link>
              <Link
                href="/account"
                className="block px-8 py-2.5 text-base text-Gray700 hover:bg-primary-lightest"
              >
                Account
              </Link>
              <Link
                href="/account"
                className="block px-8 py-2.5 text-base text-Gray700 hover:bg-primary-lightest"
              >
                Log Out
              </Link>
            </div>
          )}
        </div>
      </header>
      <QRCodeModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
