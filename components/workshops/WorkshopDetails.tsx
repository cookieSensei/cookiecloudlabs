export default function WorkshopDetails() {
  const details = [
    {
      label: "Duration",
      value: "2 Hours",
    },
    {
      label: "Audience",
      value: "Anyone with curiosity and an idea they'd like to bring to life",
    },
    {
      label: "Prerequisites",
      value: "None",
    },
    {
      label: "Requirements",
      value: "A laptop and a modern web browser",
    },
    {
      label: "Format",
      value: "In Person or Online",
    },
    {
      label: "Development Environment",
      value: "Browser-Based Cloud Labs",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          Workshop at a Glance
        </p>

        <h2 className="mb-16 text-4xl font-bold leading-tight text-white md:text-5xl">
          Everything you need to know
          <br />
          before you begin.
        </h2>

        <div className="divide-y divide-slate-800 border-y border-slate-800">

          {details.map((detail) => (
            <div
              key={detail.label}
              className="grid gap-4 py-8 md:grid-cols-3"
            >
              <div className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                {detail.label}
              </div>

              <div className="md:col-span-2 text-xl leading-relaxed text-gray-300">
                {detail.value}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}