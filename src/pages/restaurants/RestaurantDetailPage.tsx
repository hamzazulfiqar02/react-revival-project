
import React from "react"
import { useParams } from "react-router-dom"
import { Breadcrumb } from "@/components/common"
import UserLayout from "@/components/layouts/user-layout"

export default function RestaurantDetailPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <UserLayout>
      <div>
        {/* Breadcrumb */}
        <Breadcrumb screen="Restaurant lists" subScreen="Restaurant Name" />
        <div className="mt-6">
          <h1 className="text-3xl font-bold">Restaurant Details</h1>
          <p className="mt-2">Restaurant ID: {id}</p>
          
          {/* Restaurant details content will be implemented */}
          <div className="mt-8 bg-gray-100 p-6 rounded-md">
            <p className="text-gray-500">Restaurant content loading...</p>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}
