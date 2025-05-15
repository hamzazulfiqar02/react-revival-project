import DashboardLayout from "@/components/layouts/dashboard-layout";
import { RestaurantTable } from "@/components/screens/admin";
import { Card } from "@/components/ui/card";
import { Store, User } from "lucide-react";

export default function AdminOverviewPage() {
  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 border !border-primary-lightest">
            <div className="flex items-center">
              <button className="w-8 h-8 flex justify-center items-center bg-primary-lightest rounded-full mr-2">
                <User size={16} className="text-primary-light" />
              </button>
              <div>
                <h3 className="text-sm font-semibold">Total Users</h3>
                <p
                  className="text-sm font-normal text-Gray600
 textGray600"
                >
                  02
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border !border-primary-lightest">
            <div className="flex items-center">
              <button className="w-8 h-8 flex justify-center items-center bg-primary-lightest rounded-full mr-2">
                <Store size={16} className="text-primary-light" />
              </button>
              <div>
                <h3 className="text-sm font-semibold">Total Restaurants</h3>
                <p
                  className="text-sm font-normal text-Gray600
 textGray600"
                >
                  05
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Recently Added Restaurants */}
        <div>
          <RestaurantTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
