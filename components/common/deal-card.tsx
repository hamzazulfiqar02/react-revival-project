import React from "react";
import { CalendarDays, User } from "lucide-react";

interface Props {
  restaurant: string;
  deal: string;
  daysLeft: number;
  validity: string;
}

const DealCard = ({ restaurant, deal, daysLeft, validity }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-deal-card overflow-hidden">
      <div>
        <div className="p-4">
          <h4 className="text-primary font-bold text-2xl font-el-messiri">
            {restaurant}
          </h4>
          <p className="font-normal font-poppins">{deal}</p>
        </div>
        <div className="h-5 relative">
          <div className="w-3 h-5 rounded-tl-full rounded-bl-full rounded-tr-0 rounded-br-0 bg-gray-200 absolute right-0 " />
          <div className="w-full absolute top-1/2 border border-dashed" />
          <div className="w-3 h-5 rounded-tr-full rounded-br-full rounded-tl-0 rounded-bl-0 bg-gray-200 absolute left-0 " />
        </div>
        <div className="p-4 flex items-center gap-8">
          <div className="flex items-center gap-2">
            <CalendarDays size={20} className="text-black" />
            <span className="text-xs font-medium font-poppins text-Black70">
              Monday
            </span>
          </div>
          <div className="flex items-center gap-2">
            <User size={20} className="text-black" />
            <span className="text-xs font-medium font-poppins text-Black70">
              3 members per table
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
