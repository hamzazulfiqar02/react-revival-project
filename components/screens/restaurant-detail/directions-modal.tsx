"use client";

import { Dialog } from "@/components/ui/dialog";
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import {
  X,
  ExternalLink,
  MapPin,
  Smartphone,
  Globe,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurant: {
    name: string;
    address: string;
    location: {
      lat: number;
      lng: number;
    };
  };
}

export function DirectionsModal({
  isOpen,
  onClose,
  restaurant,
}: DirectionsModalProps) {
  const [isCollapse, setIsCollapse] = useState(false);

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
    restaurant.address
  )}&zoom=15`;

  const openInGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        restaurant.address
      )}`,
      "_blank"
    );
  };

  const onHandleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogContent className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white shadow-lg focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          <div className="flex justify-between items-center p-4">
            <DialogTitle className="font-semibold text-xs font-poppins text-Gray900">
              Velvet Room - Empire State Building || {restaurant.name}
            </DialogTitle>
            <DialogClose
              className="text-gray-500 hover:text-Gray900 transition-colors rounded-full w-8 h-8 inline-flex items-center justify-center"
              aria-label="Close"
            >
              <X size={20} />
            </DialogClose>
          </div>

          <div className="p-4 border-b flex flex-col gap-6">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                  <Clock size={16} className="text-Black60 mt-0.5" />
                  <span className="text-sm font-semibold text-Black90 font-poppins">
                    Now open until 23:59
                  </span>
                </div>
                <div
                  className="w-6 h-6 flex justify-center items-center rounded-full border border-borderSecondary bg-white shadow-ms"
                  onClick={onHandleCollapse}
                >
                  {!isCollapse ? (
                    <ChevronDown size={14} className="text-Black90" />
                  ) : (
                    <ChevronUp size={14} className="text-Black90" />
                  )}
                </div>
              </div>
              {isCollapse && <div className="px-6">
                <p className="text-sm text-Black70 my-2">Monday - Sunday</p>
                <p className="text-sm text-Black70">11:00 - 23:59</p>
                </div>}
            </div>

            <div className="flex items-start gap-2">
              <Globe size={16} className="text-Black60 mt-0.5" />
              <span className="text-sm font-semibold text-Black90 font-poppins">
                https://www.velvet-room.com
              </span>
            </div>

            <div className="flex items-start gap-2">
              <Smartphone size={16} className="text-Black60 mt-0.5" />
              <span className="text-sm font-semibold text-Black90 font-poppins">
                +1 212-254-2246
              </span>
            </div>

            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-Black60 mt-0.5" />
              <span className="text-sm font-semibold text-Black90 font-poppins">
                {restaurant.address}
              </span>
            </div>
          </div>

          <div className="relative h-64 w-full">
            <iframe
              title="Restaurant Location"
              width="100%"
              height="100%"
              frameBorder="0"
              src={mapUrl}
              allowFullScreen
              className="border-0"
            ></iframe>

            <div className="absolute bottom-3 left-3 z-10">
              <button
                onClick={openInGoogleMaps}
                className="bg-white text-[#0369F0] text-xs py-1 px-2 rounded-md shadow-md flex items-center gap-1 hover:bg-gray-50 transition-colors"
              >
                View larger map
              </button>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
