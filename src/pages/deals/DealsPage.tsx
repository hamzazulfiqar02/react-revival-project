
import React, { useState } from 'react';
import UserLayout from '@/components/layouts/user-layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

// Sample deal data
const deals = [
  {
    id: 1,
    restaurant: 'The Forest',
    logo: '/restaurant-logo.png',
    deal: 'Buy 1 Main Dish, Get One Free',
    daysLeft: 4,
    validity: 'Valid on Mondays',
    distance: '2.5 km',
    cuisine: 'Fine Dining',
  },
  {
    id: 2,
    restaurant: 'Velvet Room',
    logo: '/restaurant-logo.png',
    deal: 'Happy Hour: 50% off on drinks',
    daysLeft: 2,
    validity: 'Valid Monday-Thursday, 5-7pm',
    distance: '1.8 km',
    cuisine: 'Bar & Wine',
  },
  {
    id: 3,
    restaurant: 'Cut n\' Cut',
    logo: '/restaurant-logo.png',
    deal: 'Monday Special: BOGO on Main Courses',
    daysLeft: 4,
    validity: 'Valid on Mondays',
    distance: '3.2 km',
    cuisine: 'Casual',
  },
  {
    id: 4,
    restaurant: 'Sea Breeze',
    logo: '/restaurant-logo.png',
    deal: 'Tuesday Special: 40% off on Seafood Platters',
    daysLeft: 1,
    validity: 'Valid on Tuesdays',
    distance: '4.5 km',
    cuisine: 'Seafood',
  },
  {
    id: 5,
    restaurant: 'Spice Garden',
    logo: '/restaurant-logo.png',
    deal: 'Happy Hour: Discounted Appetizers',
    daysLeft: 7,
    validity: 'Valid Everyday, 4-6pm',
    distance: '1.2 km',
    cuisine: 'Indian',
  }
];

export default function DealsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  
  // Filter deals based on search query and cuisine type
  const filteredDeals = deals.filter(deal => {
    const matchesSearch = deal.restaurant.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          deal.deal.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All' || deal.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  const cuisineTypes = ['All', 'Fine Dining', 'Casual', 'Bar & Wine', 'Seafood', 'Indian'];
  
  const renderDealCard = (deal: typeof deals[0]) => (
    <div key={deal.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex items-center p-4 border-b border-gray-100">
        <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden mr-3">
          <img src={deal.logo} alt={deal.restaurant} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-medium">{deal.restaurant}</h3>
          <p className="text-xs text-gray-500">{deal.cuisine} • {deal.distance}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-primary-lightest text-primary text-sm font-medium p-3 rounded-lg mb-3">
          {deal.deal}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">{deal.validity}</span>
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
            {deal.daysLeft} days left
          </span>
        </div>
      </div>
      <div className="p-4 border-t border-gray-100">
        <button className="w-full py-2 bg-primary text-white rounded-md text-sm">
          View Restaurant
        </button>
      </div>
    </div>
  );

  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Explore Deals</h1>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Search box */}
          <div className="w-full md:w-2/3 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for restaurants or deals"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none"
            />
          </div>
          
          {/* Cuisine filter */}
          <div className="w-full md:w-1/3">
            <select
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none"
            >
              {cuisineTypes.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>
        </div>

        <Tabs defaultValue="allDeals" className="mb-8">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="allDeals">All Deals</TabsTrigger>
            <TabsTrigger value="bogoDeals">BOGO Deals</TabsTrigger>
            <TabsTrigger value="happyHour">Happy Hour</TabsTrigger>
          </TabsList>
          
          <TabsContent value="allDeals">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredDeals.map(renderDealCard)}
            </div>
          </TabsContent>
          
          <TabsContent value="bogoDeals">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredDeals.filter(d => d.deal.toLowerCase().includes('buy') || d.deal.toLowerCase().includes('bogo')).map(renderDealCard)}
            </div>
          </TabsContent>
          
          <TabsContent value="happyHour">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredDeals.filter(d => d.deal.toLowerCase().includes('happy hour')).map(renderDealCard)}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center my-8">
          <button className="px-6 py-2 border border-primary text-primary rounded-md">
            Load More
          </button>
        </div>
      </div>
    </UserLayout>
  );
}
