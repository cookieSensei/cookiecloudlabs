type StatusBadgeProps = {
  status: string;
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const styles: Record<string, string> = {
    Registered: "bg-blue-100 text-blue-800",
    "Payment Pending": "bg-yellow-100 text-yellow-800",
    Confirmed: "bg-green-100 text-green-800",
    Attended: "bg-purple-100 text-purple-800",
    Cancelled: "bg-red-100 text-red-800",
  };

  const badgeStyle =
    styles[status] ?? "bg-slate-100 text-slate-800";

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${badgeStyle}`}
    >
      {status}
    </span>
  );
}