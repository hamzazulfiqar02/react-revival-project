"use client";

import { Button } from "@/components/ui/button";
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
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QRCodeModal({ isOpen, onClose }: DirectionsModalProps) {
  const [isCollapse, setIsCollapse] = useState(false);

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
              QR Code
            </DialogTitle>
            <DialogClose
              className="text-gray-500 hover:text-Gray900 transition-colors rounded-full w-8 h-8 inline-flex items-center justify-center"
              aria-label="Close"
            >
              <X size={20} />
            </DialogClose>
          </div>

          <div className="w-full mx-auto flex flex-col items-center max-w-[325px] p-4 border-b gap-6 pb-6">
            <p className="text-[13px] font-medium text-center text-Black80">
              Show this QR code to the restaurant staff for verification.
            </p>
            <Image
              src="/images/qr-code.png"
              width={214}
              height={214}
              alt="QR-Code"
            />
            <Link href={"/feedback"} className="w-full">
              <Button className="w-full text-xs font-semibold text-white">
                Feedback
              </Button>
            </Link>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
