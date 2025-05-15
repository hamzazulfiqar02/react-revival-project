import DashboardLayout from "@/components/layouts/dashboard-layout";
import { UserTable } from "@/components/screens/admin";

export default function UserManagementPage() {
  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold font-poppins text-Black100">
            Manage and monitor user accounts
          </h2>
        </div>

        <UserTable />
      </div>
    </DashboardLayout>
  );
}
