"use client";

interface ScrollIndicatorProps {
  text: string;
  targetId?: string;
}

export default function ScrollIndicator({
  text,
  targetId,
}: ScrollIndicatorProps) {
  const handleClick = () => {
    if (!targetId) return;

    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="group mt-16 mx-auto flex flex-col items-center"
    >
      <span className="text-sm tracking-wide text-slate-400 transition group-hover:text-white">
        {text}
      </span>

      <svg
        className="mt-2 h-8 w-8 animate-bounce text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}