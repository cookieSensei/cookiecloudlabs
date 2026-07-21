import LogoutButton from "./LogoutButton";

type DashboardHeaderProps = {
  title: string;
  description: string;
};

export default function DashboardHeader({
  title,
  description,
}: DashboardHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="mt-2 text-slate-400">
          {description}
        </p>
      </div>

      <LogoutButton />
    </div>
  );
}