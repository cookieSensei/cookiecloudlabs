export default function About() {
  return (
    <section id="about" className="py-28 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10">Why CookieCloud Labs?</h2>

      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl p-10 rounded-3xl shadow-2xl hover:rotate-1 transition duration-500">
        <p className="text-gray-300 mb-6">
          Engineering students struggle with something that shouldn’t be the hardest part of AI —
          setting up the environment.
        </p>

        <p className="text-gray-400">
          Installing libraries. Fixing dependency issues. Version conflicts.
          Laptops hanging during simple tasks.
        </p>

        <p className="mt-6 text-gray-300 font-medium">
          Students don’t lack capability. They lack infrastructure.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        <Feature title="Browser VS Code" desc="Code directly in your browser." />
        <Feature title="Ready AI Environment" desc="Pre-installed libraries." />
        <Feature title="AIOps Workflows" desc="Real DevOps + AI integration." />
      </div>
    </section>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/5 p-8 rounded-2xl hover:-translate-y-3 transition duration-300">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}