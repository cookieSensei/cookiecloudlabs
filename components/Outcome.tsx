export default function Outcome() {
  return (
    <section className="py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
        What You’ll Walk Away With
      </h2>

      <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-lg text-white font-semibold">
            💻 Strong GitHub Portfolio
          </p>
          <p className="text-gray-400 mt-2">
            Real projects that recruiters can actually evaluate
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-lg text-white font-semibold">
            🚀 Real Project Experience
          </p>
          <p className="text-gray-400 mt-2">
            Not toy examples — actual working systems
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-lg text-white font-semibold">
            🔧 Dev Workflow Skills
          </p>
          <p className="text-gray-400 mt-2">
            Git, branches, pull requests — like real teams
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-lg text-white font-semibold">
            🧠 Confidence to Build
          </p>
          <p className="text-gray-400 mt-2">
            Follow tutorials with confidence — and actually understand what you're building
          </p>
        </div>

      </div>

      <p className="text-center text-gray-300 mt-10 text-lg font-semibold">
        Not just a certificate. Actual proof of skill.
      </p>
    </section>
  );
}