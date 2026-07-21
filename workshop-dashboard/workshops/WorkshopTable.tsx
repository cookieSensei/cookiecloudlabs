import type { WorkshopRegistration } from "@/workshop-dashboard/types/workshop";

type WorkshopTableProps = {
  registrations: WorkshopRegistration[];
};

export default function WorkshopTable({
  registrations,
}: WorkshopTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-800">
      <table className="min-w-full divide-y divide-slate-800">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">GitHub</th>
            <th className="px-4 py-3 text-left">Workshop</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Registered</th>
          </tr>
        </thead>

        <tbody>
          {registrations.map((registration) => (
            <tr
              key={registration.id}
              className="border-t border-slate-800 hover:bg-slate-900/50"
            >
              <td className="px-4 py-3">
                {registration.full_name}
              </td>

              <td className="px-4 py-3">
                {registration.email}
              </td>

              <td className="px-4 py-3">
                {registration.github_username}
              </td>

              <td className="px-4 py-3">
                {registration.workshop}
              </td>

              <td>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                {registration.status}
              </span>
            </td>

              <td className="px-4 py-3">
                {new Date(registration.created_at).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                  timeZone: "Asia/Kolkata",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}