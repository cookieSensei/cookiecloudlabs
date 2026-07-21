"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search by name, email or GitHub..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
    />
  );
}