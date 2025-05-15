"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ListFilter,
  User,
  Handshake,
  ChefHat,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Pagination, SearchFilter, StatCard } from "@/components/common";
import DashboardLayout from "@/components/layouts/dashboard-layout";

// Sample data for deals
const deals = [
  {
    id: 1,
    restaurantName: "Clarks Oyster Bar",
    priceRange: "$$$",
    address: "1200 W 6th St, Austin, TX 78703",
    happyHours: "Daily 3pm to 5pm",
    special:
      "50% oysters | weekdays half off martinis & burgers, $1 oysters shuckers mix, seasonal, half price bottle",
    status: "Pending",
    type: "bogo",
    images: [
      "/images/food-1.png",
      "/images/food-2.png",
      "/images/food-3.png",
      "/images/food-4.png",
    ],
  },
  {
    id: 2,
    restaurantName: "Sushi Palace",
    priceRange: "$$",
    address: "500 Congress Ave, Austin, TX 78701",
    happyHours: "Mon-Fri 4pm to 6pm",
    special: "Buy one roll, get one 50% off | $5 sake, $3 beer",
    status: "Approved",
    type: "bogo",
    images: [
      "/images/food-2.png",
      "/images/food-3.png",
      "/images/food-4.png",
      "/images/food-1.png",
    ],
  },
  {
    id: 3,
    restaurantName: "Taco Fiesta",
    priceRange: "$",
    address: "2200 E 7th St, Austin, TX 78702",
    happyHours: "Tues-Sun 2pm to 6pm",
    special: "Buy one taco plate, get one free | $2 margaritas",
    status: "Rejected",
    type: "bogo",
    images: [
      "/images/food-3.png",
      "/images/food-4.png",
      "/images/food-1.png",
      "/images/food-2.png",
    ],
  },
  {
    id: 4,
    restaurantName: "Burger Joint",
    priceRange: "$$",
    address: "600 N Lamar Blvd, Austin, TX 78703",
    happyHours: "Daily 3pm to 7pm",
    special: "Buy one burger, get one free | $4 draft beers",
    status: "Pending",
    type: "bogo",
    images: [
      "/images/food-4.png",
      "/images/food-1.png",
      "/images/food-2.png",
      "/images/food-3.png",
    ],
  },
  {
    id: 5,
    restaurantName: "Pizza Palace",
    priceRange: "$$",
    address: "1100 S Lamar Blvd, Austin, TX 78704",
    happyHours: "Mon-Thurs 4pm to 7pm",
    special: "Buy one pizza, get one free | $3 beer, $5 wine",
    status: "Approved",
    type: "happy",
    images: [
      "/images/food-1.png",
      "/images/food-2.png",
      "/images/food-3.png",
      "/images/food-4.png",
    ],
  },
  {
    id: 6,
    restaurantName: "Wine Bar",
    priceRange: "$$$",
    address: "800 W 6th St, Austin, TX 78701",
    happyHours: "Wed-Sun 3pm to 6pm",
    special: "Half off all wines by the glass | $10 cheese board",
    status: "Pending",
    type: "happy",
    images: [
      "/images/food-2.png",
      "/images/food-3.png",
      "/images/food-4.png",
      "/images/food-5.png",
      "/images/food-1.png",
    ],
  },
];

export default function DealManagementPage() {
  const [activeTab, setActiveTab] = useState("bogo");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  // Filter deals based on active tab and search query
  const filteredDeals = deals.filter((deal) => {
    const matchesTab = activeTab === "all" || deal.type === activeTab;
    const matchesSearch = deal.restaurantName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const totalPages = Math.ceil(filteredDeals.length / itemsPerPage);
  const paginatedDeals = filteredDeals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleApprove = (id: number) => {
    console.log(`Approving deal with ID: ${id}`);
    // Here you would call your API to approve the deal
  };

  const handleReject = (id: number) => {
    console.log(`Rejecting deal with ID: ${id}`);
    // Here you would call your API to reject the deal
  };

  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div>
          <p className="text-lg font-semibold mt-2">Manage and monitor deals</p>
        </div>

        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <div className="flex flex-col items-center gap-4">
          <StatCard
            icon={<User size={16} className="text-primary" />}
            title={
              <p>
                Ahmad Khan{" "}
                <span className="ml-2 text-[10px] rounded-full px-2 py-1 text-Gray600 border border-Gray300">
                  User
                </span>
              </p>
            }
            value={
              <p className="text-Gray800">
                updated their profile
                <span className="text-Gray600">
                  {" "}
                  - Changed contact information and profile picture
                </span>
              </p>
            }
            additionalInfo={
              <div className="flex flex-col justify-around text-sm">
                <p className="text-Gray600">25 May 2025, 10:23 AM</p>
              </div>
            }
          />
          <StatCard
            icon={<Handshake size={16} className="text-primary" />}
            title={
              <p>
                Food Palace{" "}
                <span className="ml-2 text-[10px] rounded-full px-2 py-1 text-Gray600 border border-Gray300">
                  Deal
                </span>
              </p>
            }
            value={
              <p className="text-Gray800">
                added a new BOGO deal
                <span className="text-Gray600">
                  {" "}
                  - Buy 1 Get 1 Free on all burgers every Tuesday
                </span>
              </p>
            }
            additionalInfo={
              <div className="flex flex-col justify-around text-sm">
                <p className="text-Gray600">25 May 2025, 10:23 AM</p>
              </div>
            }
          />
          <StatCard
            icon={<ChefHat size={16} className="text-primary" />}
            title={
              <p>
                Ela’s Palace{" "}
                <span className="ml-2 text-[10px] rounded-full px-2 py-1 text-Gray600 border border-Gray300">
                  Restaurant
                </span>
              </p>
            }
            value={
              <p className="text-Gray800">
                updated restaurant information
                <span className="text-Gray600">
                  {" "}
                  - Changed opening hours and added new menu categories
                </span>
              </p>
            }
            additionalInfo={
              <div className="flex flex-col justify-around text-sm">
                <p className="text-Gray600">25 May 2025, 10:23 AM</p>
              </div>
            }
          />
        </div>

        {/* <Tabs
          defaultValue="bogo"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="bg-transparent w-full justify-start rounded-none p-0 h-auto">
            <TabsTrigger value="bogo">Mondays BOGO Meal</TabsTrigger>
            <TabsTrigger value="happy">Happy Hours</TabsTrigger>
          </TabsList>
        </Tabs>

        {paginatedDeals.map((deal) => (
          <div key={deal.id} className="flex flex-col lg:flex-row gap-6">
            <div className="w-full max-h-fit lg:w-1/2 gap-4 p-4 rounded-xl  border bg-Gray50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold font-poppins text-primary">
                    {deal.restaurantName}
                  </h3>
                  <div className="bg-primary-lightest px-3 py-1 rounded-full">
                    <span className="text-xs font-medium font-poppins text-primary">
                      {deal.priceRange}
                    </span>
                  </div>
                </div>
                <div className="px-3 py-1 bg-warningLight text-warningDark rounded-md text-sm">
                  {deal.status}
                </div>
              </div>

              <p className="text-xs font-poppins text-Black100 my-3">
                {deal.address}
              </p>

              <div className="flex items-center gap-2 mt-1">
                <span className="min-w-[90px] text-xs font-semibold">
                  Happy Hours:
                </span>
                <span className="text-xs">{deal.happyHours}</span>
              </div>

              <div className="flex items-center gap-2 my-4">
                <span className="min-w-[90px] text-xs font-semibold">
                  Special:
                </span>
                <span className="text-xs">{deal.special}</span>
              </div>

              <div>
                <Link
                  href={`/admin/deals`}
                  className="text-xs font-poppins text-Blue100"
                >
                  [View Items]
                </Link>
              </div>

              <div className="flex justify-end gap-4 mt-4">
                <Button
                  onClick={() => handleReject(deal.id)}
                  className="px-6 py-1.5 text-white bg-dangerDark hover:bg-dangerDark"
                >
                  Reject
                </Button>
                <Button
                  onClick={() => handleApprove(deal.id)}
                  className="px-6 py-1.5 text-white bg-successDark hover:bg-successDark"
                >
                  Approve
                </Button>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-4 gap-2">
                {deal.images.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className={`relative ${
                      index === 0 ? "col-span-2 row-span-2" : "col-span-1"
                    } rounded-md overflow-hidden`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Food image ${index + 1}`}
                      width={index === 0 ? 400 : 200}
                      height={index === 0 ? 400 : 200}
                      className="object-cover w-full h-full"
                    />
                    {index === 4 && (
                      <div className="absolute bottom-0 right-0 bg-gray-700 text-white p-2 rounded-bl-md">
                        +8 More
                      </div>
                    )}
                  </div>
                ))}
                <div className="relative col-span-1 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                  <div className="text-gray-700 font-medium">+8 More</div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        /> */}
      </div>
    </DashboardLayout>
  );
}
