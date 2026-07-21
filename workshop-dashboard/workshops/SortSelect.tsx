"use client";

export type SortOption =
  | "newest"
  | "oldest"
  | "name-asc"
  | "name-desc";

type SortSelectProps = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

export default function SortSelect({
  value,
  onChange,
}: SortSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SortOption)}
      className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
    >
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="name-asc">Name (A–Z)</option>
      <option value="name-desc">Name (Z–A)</option>
    </select>
  );
}