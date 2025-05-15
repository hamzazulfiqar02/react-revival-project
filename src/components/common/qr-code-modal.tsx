
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import QRCode from "react-qr-code"

interface QRCodeModalProps {
  isOpen: boolean
  onClose: () => void
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Your QR Code</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center p-6">
          <div className="w-64 h-64 border-4 border-primary p-3">
            <QRCode
              size={256}
              value="https://supermondays.com/user/12345"
              className="w-full h-full"
            />
          </div>
        </div>
        <p className="text-center text-sm text-gray-500">
          Show this QR code to restaurant staff to redeem your offers
        </p>
      </DialogContent>
    </Dialog>
  )
}
