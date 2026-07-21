import { ReactNode } from "react";

type DetailFieldProps = {
  label: string;
  value?: ReactNode;
  children?: ReactNode;
};

export default function DetailField({
  label,
  value,
  children,
}: DetailFieldProps) {
  return (
    <div>
      <p className="text-sm text-slate-400">{label}</p>

      <div className="mt-1">
        {children ?? value}
      </div>
    </div>
  );
}