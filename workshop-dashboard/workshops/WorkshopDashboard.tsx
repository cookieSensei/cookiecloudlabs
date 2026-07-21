"use client";

import { useMemo, useState } from "react";

import type { WorkshopRegistration } from "../types/workshop";
import SearchBar from "./SearchBar";
import WorkshopTable from "./WorkshopTable";
import SortSelect, { type SortOption } from "./SortSelect";
import EmptyState from "../ui/EmptyState";
import WorkshopFilter from "./WorkshopFilter";

type WorkshopDashboardProps = {
  registrations: WorkshopRegistration[];
};

export default function WorkshopDashboard({
  registrations,
}: WorkshopDashboardProps) {
  const [search, setSearch] = useState("");
  const workshops = useMemo(() => {
  return [...new Set(registrations.map((r) => r.workshop))].sort();
}, [registrations]);

  const [selectedWorkshop, setSelectedWorkshop] = useState("");
    
const filteredRegistrations = useMemo(() => {
  const query = search.trim().toLowerCase();

  return registrations.filter((registration) => {
    const matchesSearch =
      !query ||
      registration.full_name.toLowerCase().includes(query) ||
      registration.email.toLowerCase().includes(query) ||
      registration.github_username.toLowerCase().includes(query) ||
      registration.workshop.toLowerCase().includes(query);

    const matchesWorkshop =
      !selectedWorkshop ||
      registration.workshop === selectedWorkshop;

    return matchesSearch && matchesWorkshop;
  });
}, [registrations, search, selectedWorkshop]);



  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const sortedRegistrations = [...filteredRegistrations].sort((a, b) => {
  switch (sortBy) {
    case "oldest":
      return (
        new Date(a.created_at).getTime() -
        new Date(b.created_at).getTime()
      );

    case "name-asc":
      return a.full_name.localeCompare(b.full_name);

    case "name-desc":
      return b.full_name.localeCompare(a.full_name);

    case "newest":
    default:
      return (
        new Date(b.created_at).getTime() -
        new Date(a.created_at).getTime()
      );
  }
});



  return (
  <>
    <div className="mb-6 flex flex-wrap items-center gap-4">
      <div className="flex-1 min-w-[250px]">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
      </div>

      <WorkshopFilter
        workshops={workshops}
        value={selectedWorkshop}
        onChange={setSelectedWorkshop}
      />

      <SortSelect
        value={sortBy}
        onChange={setSortBy}
      />
    </div>

    {sortedRegistrations.length === 0 ? (
    <EmptyState
      title="No registrations found"
      description="Try changing your search or clearing the filter."
    />
  ) : (
    <WorkshopTable registrations={sortedRegistrations} />
  )}
  </>
  );
}