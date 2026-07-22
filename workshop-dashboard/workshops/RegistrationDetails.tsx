"use client";

import { useState } from "react";

import DetailField from "@/workshop-dashboard/ui/DetailField";
import StatusBadge from "@/workshop-dashboard/ui/StatusBadge";
import StatusEditor from "./StatusEditor";

import type { WorkshopRegistration } from "@/workshop-dashboard/types/workshop";

type RegistrationDetailsProps = {
  registration: WorkshopRegistration;
};

export default function RegistrationDetails({
  registration: initialRegistration,
}: RegistrationDetailsProps) {
  const [registration, setRegistration] = useState(initialRegistration);

  return (
    <>
      <div className="space-y-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
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
          value={registration.workshop.title}
        />

        <DetailField label="Status">
          <StatusBadge status={registration.status} />
        </DetailField>

        <DetailField
          label="Registered On"
          value={new Date(registration.created_at).toLocaleString(
            "en-IN",
            {
              timeZone: "Asia/Kolkata",
            }
          )}
        />
      </div>

      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Update Status
        </h2>

        <StatusEditor
          id={registration.id}
          currentStatus={registration.status}
          onStatusUpdated={(status) =>
            setRegistration({
              ...registration,
              status,
            })
          }
        />
      </div>
    </>
  );
}