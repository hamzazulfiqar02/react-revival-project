import Image from "next/image";
import Link from "next/link";
import {
  Search,
  MapPin,
  Clock,
  Calendar,
  ChevronRight,
  Bell,
} from "lucide-react";
import BottomNavigation from "@/components/bottom-navigation";
import FavoriteButton from "@/components/favorite-button";
import { categories, recommendations } from "@/constants/home";



const HomeMobile = () => {
  return (
    <div className="min-h-screen bg-white pb-16 font-poppins md:pt-0 w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
        {/* User Greeting */}
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600">Good Morning,</p>
                <h2 className="text-xl font-bold">Clarissa</h2>
              </div>
            </div>
            <div className="relative md:hidden">
              <button className="relative p-1">
                <Bell size={24} className="text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  3
                </span>
              </button>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 mt-2">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm">California 445 Rd</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="py-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-el-messiri">
            Dine More, <span className="text-primary">Spend Less</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold font-el-messiri">
            Every Monday!
          </h2>
        </div>

        {/* Search Bar - Only show on mobile */}
        <div className="py-2 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Find restaurant, food or nearby places"
              className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-lg"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search size={20} className="text-primary" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 py-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg"
            >
              <Image src={category.icon} alt="Icon" width={35} height={35} />
              <p className="text-sm mt-1">{category.name}</p>
            </div>
          ))}
        </div>

        {/* Best Deals */}
        <div className="mt-4">
          <h3 className="text-xl md:text-2xl font-bold mb-2 font-el-messiri">
            Best Deals in Town
          </h3>
          <div className="overflow-x-auto flex gap-4 pb-2">
            <div className="min-w-[250px] md:min-w-[300px] bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 pb-3">
                <h4 className="text-lg font-semibold">
                  Buy 1 Main Dish, Get One Free
                </h4>
              </div>
              <div className="border-t border-gray-100"></div>
              <div className="flex items-center justify-between p-4 pt-3">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-500">4 Days left</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-500">Valid Monday</span>
                </div>
              </div>
            </div>
            <div className="min-w-[250px] md:min-w-[300px] bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 pb-3">
                <h4 className="text-lg font-semibold">
                  Buy 1 Main Dish, Get One Free
                </h4>
              </div>
              <div className="border-t border-gray-100"></div>
              <div className="flex items-center justify-between p-4 pt-3">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-500">4 Days left</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-500">Valid Monday</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-bold font-el-messiri">
              Recommendations
            </h3>
            <Link
              href="/explore-restaurants"
              className="text-primary flex items-center"
            >
              See More <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recommendations.map((restaurant) => (
              <Link
                key={restaurant.id}
                href={`/restaurant/${restaurant.id}`}
                className="block"
              >
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      width={400}
                      height={225}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute right-0 bottom-0 font-size-0 line-height-0">
                    <FavoriteButton restaurantId={restaurant.id} size={24} />
                  </div>
                </div>
                <div className="mt-2">
                  <h4 className="text-xl font-bold text-primary font-el-messiri">
                    {restaurant.name}
                  </h4>
                  <p className="text-sm text-gray-600">{restaurant.category}</p>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill={
                              i < Math.floor(restaurant.rating)
                                ? "currentColor"
                                : "none"
                            }
                            stroke="currentColor"
                            className="text-yellow-500"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ))}
                      <span className="text-xs ml-1">{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">{restaurant.distance}</span>
                      <div className="flex items-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-primary"
                        >
                          <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"></path>
                          <path d="M12 12h4v4"></path>
                          <path d="M16 8V4h-4"></path>
                          <path d="M16 4l-5 5"></path>
                        </svg>
                        <span className="text-xs">
                          {restaurant.deals} available deals
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}

export default HomeMobile
