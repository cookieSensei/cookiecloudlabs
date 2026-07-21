type EmptyStateProps = {
  title: string;
  description: string;
};

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900 py-16 text-center">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-slate-400">
        {description}
      </p>
    </div>
  );
}