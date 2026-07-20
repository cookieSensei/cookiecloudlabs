export default function Requirements() {
  const requirements = [
    {
      title: "GitHub Account",
      description:
        "Workshop materials and cloud development environments are shared through the CookieSensei Workshop GitHub Organization.",
    },
    {
      title: "Personal Laptop",
      description:
        "Bring your own laptop capable of running a modern web browser.",
    },
    {
      title: "Stable Internet",
      description:
        "A reliable internet connection is required for accessing cloud labs and participating in live sessions.",
    },
    {
      title: "Payment Confirmation",
      description:
        "Workshop access is granted after your registration and payment have been confirmed.",
    },
  ];

  return (
    <section
      id="requirements"
      className="py-32 px-6 border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-8">
          Before You Begin
        </p>

        <h2 className="max-w-3xl mx-auto text-center font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          A few things you'll need.
        </h2>

        <p className="max-w-3xl mx-auto mt-10 text-center text-lg md:text-xl text-slate-300 leading-relaxed">
          Before registering, make sure you have everything required to
          participate in a CookieSensei workshop.
        </p>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {requirements.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8"
            >
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}