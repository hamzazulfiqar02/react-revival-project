import DashboardLayout from "@/components/layouts/dashboard-layout";
import { StaffTable } from "@/components/screens/manager";

export default function StaffManagementPage() {
  return (
    <DashboardLayout type={"manager"}>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold font-poppins text-Black100">
            Manage and monitor staff accounts
          </h2>
        </div>

        <StaffTable />
      </div>
    </DashboardLayout>
  );
}
