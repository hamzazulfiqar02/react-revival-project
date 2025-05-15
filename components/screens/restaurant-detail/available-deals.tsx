import { DealCard } from "@/components/common";

interface AvailableDealsProps {
  deals: {
    id: string;
    restaurant: string;
    deal: string;
    daysLeft: number;
    validity: string;
  }[];
}

export function AvailableDeals({ deals }: AvailableDealsProps) {
  return (
    <div>
      <h2 className="text-xl font-medium font-poppins mt-12 mb-4">Available deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <DealCard
            key={deal.id}
            restaurant={deal.restaurant}
            deal={deal.deal}
            daysLeft={deal.daysLeft}
            validity={deal.validity}
          />
        ))}
      </div>
    </div>
  );
}
