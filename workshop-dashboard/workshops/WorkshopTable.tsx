import type { WorkshopRegistration } from "@/workshop-dashboard/types/workshop";
import StatusBadge from "../ui/StatusBadge";
import Link from "next/link";


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
            <th className="px-4 py-3 text-left">Actions</th>
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
                {registration.workshop.title}
              </td>

              <td>
              <StatusBadge status={registration.status} />
              </td>

              <td className="px-4 py-3">
                {new Date(registration.created_at).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                  timeZone: "Asia/Kolkata",
                })}
              </td>

              <td className="px-4 py-3">
                <Link
                  href={`/admin/workshops/${registration.id}`}
                  className="rounded-lg bg-slate-800 px-3 py-2 text-sm hover:bg-slate-700"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}