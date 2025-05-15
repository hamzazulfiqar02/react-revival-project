import DashboardLayout from "@/components/layouts/dashboard-layout";
import { RestaurantManagementTable } from "@/components/screens/admin";

export default function RestaurantManagementPage() {
  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold font-poppins">
            Manage and monitor restaurants
          </h2>
        </div>

        <RestaurantManagementTable />
      </div>
    </DashboardLayout>
  );
}
