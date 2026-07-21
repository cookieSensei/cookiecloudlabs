"use client";

import { useState, useTransition } from "react";
import { updateRegistrationStatus } from "@/app/admin/workshops/[id]/actions";

type StatusEditorProps = {
  id: string;
  currentStatus: string;
};

const STATUSES = [
  "Registered",
  "Payment Pending",
  "Confirmed",
  "Attended",
  "Cancelled",
];

export default function StatusEditor({
  id,
  currentStatus,
}: StatusEditorProps) {
  const [status, setStatus] = useState(currentStatus);
  const [isPending, startTransition] = useTransition();

  const handleSave = () => {
    startTransition(async () => {
      await updateRegistrationStatus(id, status);
    });
  };

  return (
    <div className="space-y-4">
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 p-2"
      >
        {STATUSES.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <button
        onClick={handleSave}
        disabled={isPending}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}