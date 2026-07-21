import { getWorkshopRegistrationById } from "@/services/workshop.service";
import DetailField from "@/workshop-dashboard/ui/DetailField";
import StatusBadge from "@/workshop-dashboard/ui/StatusBadge";
import StatusEditor from "@/workshop-dashboard/workshops/StatusEditor";
import RegistrationDetails from "@/workshop-dashboard/workshops/RegistrationDetails";

type RegistrationPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RegistrationPage({
  params,
}: RegistrationPageProps) {
  const { id } = await params;

  const registration = await getWorkshopRegistrationById(id);

return (
  <main className="p-8">
    <h1 className="mb-8 text-3xl font-bold">
      Registration Details
    </h1>

    <RegistrationDetails registration={registration} />
  </main>
);
}