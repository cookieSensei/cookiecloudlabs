import { getWorkshopRegistrations } from "@/services/workshop.service";
import WorkshopTable from "@/workshop-dashboard/workshops/WorkshopTable";
import StatCard from "@/workshop-dashboard/ui/StatCard";
import DashboardHeader from "@/workshop-dashboard/admin/DashboardHeader";


export default async function AdminWorkshopsPage() {
  const registrations = await getWorkshopRegistrations();

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="mx-auto max-w-7xl">


        <DashboardHeader
            title="Workshop Dashboard"
            description="Manage workshop registrations."
        />
        <StatCard
          title="Total Registrations"
          value={registrations.length}
        />
        <WorkshopTable registrations={registrations} />
      </div>
    </main>
  );
}