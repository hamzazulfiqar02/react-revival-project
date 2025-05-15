"use client";

import { use } from 'react';
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Images, User } from "lucide-react";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import { StatCard } from "@/components/common";
import { MoneyIcon, RedeemedIcon } from '@/icons';

// Sample restaurant data
const restaurantData = {
  id: 1,
  name: "Eli's Restaurant",
  status: "Pending",
  basicInfo: {
    ownerName: "John Smith",
    emailAddress: "johnsmith@gmail.com",
    phoneNumber: "+1 (555) 123-4567",
    restaurantAddress: "123 Culinary Street, FC 12345",
    registrationDate: "January 15, 2024",
    businessLicense: "#BL76612",
    taxId: "#TAX457889",
  },
  restaurantInfo: {
    description:
      "Description of the restaurant. What type of food it serves, what is the vibe of restaurant.",
    cuisineType: "Continental",
    priceRange: "$30-$100",
    openingHours: "12:00 PM - 3:00 PM",
  },
  images: {
    exterior: [
      "/images/restaurant-exterior-1.png",
      "/images/restaurant-exterior-1.png",
    ],
    interior: [
      "/images/restaurant-exterior-1.png",
      "/images/restaurant-exterior-1.png",
    ],
    foodShots: [
      "/images/restaurant-exterior-1.png",
      "/images/restaurant-exterior-1.png",
    ],
  },
};

const statusType = {
  pending: "Pending",
  approved: "Approved",
  rejected: "Rejected"
}

export default function RestaurantDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params); 

  const router = useRouter();
  const [status, setStatus] = useState(statusType.pending);
  const [restaurant] = useState(restaurantData);

  const handleApprove = () => {
    setStatus(statusType.approved)
    console.log(`Approving restaurant with ID: ${id}`);
    // Here you would call your API to approve the restaurant
    // Then redirect back to the restaurant list
    // router.push("/admin/restaurants");
  };

  const handleReject = () => {
    setStatus(statusType.rejected)
    console.log(`Rejecting restaurant with ID: ${id}`);
    // Here you would call your API to reject the restaurant
    // Then redirect back to the restaurant list
    router.push("/admin/restaurants");
  };

  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        {status === statusType.pending && <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold font-poppins mt-2">
              {restaurant.name}
            </h3>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleReject}
              className="h-8 px-3 text-xs rounded-lg text-white bg-dangerDark hover:bg-dangerDark"
            >
              Reject
            </Button>
            <Button
              onClick={handleApprove}
              className="h-8 px-3 text-xs rounded-lg text-white bg-successDark hover:bg-successDark"
            >
              Approve
            </Button>
          </div>
        </div>}

      {status === statusType.approved &&   <div className="flex items-center gap-4">
          <StatCard
            icon={<MoneyIcon />}
            title="Revenue"
            value={"$5000"}
          />
          <StatCard
            icon={<RedeemedIcon />}
            title="Total redeemed"
            value={"05"}
          />
          <StatCard
            icon={<User size={16} className="text-primary" />}
            title="Active Deals"
            value=""
            additionalInfo={
              <div className="flex flex-col justify-around text-sm">
                <div className="flex justify-between">
                  <span className="text-sm text-Gray600 font-poppins">
                    BOGO
                  </span>
                  <span className="text-sm font-poppins font-semibold text-Black100 ml-2">
                    2
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-Gray600 font-poppins">
                    Happy Hour
                  </span>
                  <span className="text-sm font-poppins font-semibold text-Black100 ml-2">
                    1
                  </span>
                </div>
              </div>
            }
          />
        </div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Information */}
          <div className="space-y-8">
            {/* Basic Information */}
            <Card className="p-4 !border-primary-lightest">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold font-poppins flex items-center">
                  <button className="w-8 h-8 flex justify-center items-center bg-primary-lightest rounded-full mr-2">
                    <User size={16} className="text-primary-light" />
                  </button>
                  Basic Information
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-row items-center">
                    <p className="min-w-[200px] text-xs font-poppins text-Gray700">
                      Owner Name:
                    </p>
                    <p className="text-xs font-poppins">
                      {restaurant.basicInfo.ownerName}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="min-w-[200px] text-xs font-poppins text-Gray700">
                      Email Address:
                    </p>
                    <p className="text-xs font-poppins">
                      {restaurant.basicInfo.emailAddress}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="min-w-[200px] text-xs font-poppins text-Gray700">
                      Phone Number:
                    </p>
                    <p className="text-xs font-poppins">
                      {restaurant.basicInfo.phoneNumber}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="min-w-[200px] text-xs font-poppins text-Gray700">
                      Restaurant Address:
                    </p>
                    <p className="text-xs font-poppins">
                      {restaurant.basicInfo.restaurantAddress}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="min-w-[200px] text-xs font-poppins text-Gray700">
                      Registration Date:
                    </p>
                    <p className="text-xs font-poppins">
                      {restaurant.basicInfo.registrationDate}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="min-w-[200px] text-xs font-poppins text-Gray700">
                      Business License:
                    </p>
                    <p className="text-xs font-poppins">
                      {restaurant.basicInfo.businessLicense}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="min-w-[200px] text-xs font-poppins text-Gray700">
                      Tax ID:
                    </p>
                    <p className="text-xs font-poppins">
                      {restaurant.basicInfo.taxId}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Restaurant Information */}
            <Card className="p-4 !border-primary-lightest">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold font-poppins flex items-center">
                  <button className="w-8 h-8 flex justify-center items-center bg-primary-lightest rounded-full mr-2">
                    <User size={16} className="text-primary-light" />
                  </button>
                  Restaurant Information
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-Gray700">Description:</p>
                    <p className="text-xs">
                      {restaurant.restaurantInfo.description}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="min-w-[200px] text-xs font-poppins text-Gray700">
                      Cuisine Type:
                    </p>
                    <p className="text-xs font-poppins">
                      {restaurant.restaurantInfo.cuisineType}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="min-w-[200px] text-xs font-poppins text-Gray700">
                      Price Range:
                    </p>
                    <p className="text-xs font-poppins">
                      {restaurant.restaurantInfo.priceRange}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="min-w-[200px] text-xs font-poppins text-Gray700">
                      Opening Hours:
                    </p>
                    <p className="text-xs font-poppins">
                      {restaurant.restaurantInfo.openingHours}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Images */}
          <Card className="p-4 !border-primary-lightest">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold font-poppins flex items-center">
                <button className="w-8 h-8 flex justify-center items-center bg-primary-lightest rounded-full mr-2">
                  <Images size={16} className="text-primary-light" />
                </button>
                Document and Images
              </h4>

              {/* Restaurant Exterior */}
              <div className="grid grid-cols-2 gap-4">
                {restaurant.images.exterior.map((image, index) => (
                  <div key={`exterior-${index}`} className="space-y-2">
                    <div className="relative h-40 rounded-md overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Restaurant Exterior ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-base font-semibold font-poppins">
                      Restaurant Exterior
                    </p>
                  </div>
                ))}
              </div>

              {/* Restaurant Interior */}
              <div className="grid grid-cols-2 gap-4">
                {restaurant.images.interior.map((image, index) => (
                  <div key={`interior-${index}`} className="space-y-2">
                    <div className="relative h-40 rounded-md overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Restaurant Interior ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-base font-semibold font-poppins">
                      Restaurant Interior
                    </p>
                  </div>
                ))}
              </div>

              {/* Food Shots */}
              <div className="grid grid-cols-2 gap-4">
                {restaurant.images.foodShots.map((image, index) => (
                  <div key={`food-${index}`} className="space-y-2">
                    <div className="relative h-40 rounded-md overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Food Shot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-base font-semibold font-poppins">
                      Food Shots
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
