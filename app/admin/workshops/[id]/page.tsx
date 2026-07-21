import { getWorkshopRegistrationById } from "@/services/workshop.service";
import DetailField from "@/workshop-dashboard/ui/DetailField";
import StatusBadge from "@/workshop-dashboard/ui/StatusBadge";
import StatusEditor from "@/workshop-dashboard/workshops/StatusEditor";

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
      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-4 text-xl font-semibold">
            Update Status
        </h2>

        <StatusEditor
            id={registration.id}
            currentStatus={registration.status}
        />
        </div>
        <DetailField
        label="Full Name"
        value={registration.full_name}
        />

        <DetailField
        label="Email"
        value={registration.email}
        />

        <DetailField
        label="GitHub Username"
        value={registration.github_username}
        />

        <DetailField
        label="Workshop"
        value={registration.workshop}
        />

        <DetailField label="Status">
        <StatusBadge status={registration.status} />
        </DetailField>

        <DetailField
        label="Registered On"
        value={new Date(registration.created_at).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
        })}
        />
    </main>
  );
}