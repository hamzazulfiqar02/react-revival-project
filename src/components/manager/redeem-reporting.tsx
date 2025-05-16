
import React from "react";
import { RedeemForm } from "./redeem-form";
import { Redemption } from "../../types/restaurant";
import { toast } from "../../helpers/toast";

interface RedeemReportingProps {
  onRedeemSubmit: (redemption: Partial<Redemption>) => void;
}

export function RedeemReporting({ onRedeemSubmit }: RedeemReportingProps) {
  const handleSubmit = (redemption: Partial<Redemption>) => {
    onRedeemSubmit(redemption);
    toast.success("Redemption reported successfully!");
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Report a Redemption</h1>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="max-w-lg mx-auto">
          <p className="text-sm text-gray-600 mb-4">
            Use this form to report when customers redeem a Super Mondays deal at your restaurant.
            Enter the confirmation code, scan customer QR codes, and provide bill details.
          </p>
          <RedeemForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
