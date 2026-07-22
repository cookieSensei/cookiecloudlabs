"use client";

type WorkshopFilterProps = {
  workshops: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function WorkshopFilter({
  workshops,
  value,
  onChange,
}: WorkshopFilterProps) {

    
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
    >
      <option value="">All Workshops</option>

      {workshops.map((workshop) => (
        <option key={workshop} value={workshop}>
          {workshop}
        </option>
      ))}
    </select>
  );
}