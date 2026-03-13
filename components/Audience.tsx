export default function Audience() {
  return (
    <section className="py-24 bg-zinc-950 text-white text-center">

      <h2 className="text-4xl font-bold mb-12">
        Who This Bootcamp Is For
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-left">

        <ul className="space-y-3">
          <li>✓ BBA / BCom / BA students curious about AI</li>
          <li>✓ Beginners who want to enter AI</li>
          <li>✓ Students who want real projects</li>
        </ul>

        <ul className="space-y-3">
          <li>✗ Not for advanced ML engineers</li>
          <li>✗ Not a math-heavy research course</li>
        </ul>

      </div>

    </section>
  );
}