export default function LearningWithoutBarriers() {
  return (
    <section className="py-32 px-6 bg-[#08101f]">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
            Learning Without Barriers
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Learning should begin with curiosity,
            <br />
            not software installation.
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed">
            Every CookieSensei learner receives access to browser-based Cloud
            Labs so they can focus on learning instead of configuring software.
          </p>

        </div>

        {/* Four Pillars */}

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <div className="text-4xl mb-4">💻</div>

            <h3 className="text-2xl font-bold mb-4">
              Any Device
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Learn using Windows, macOS, Linux, or even an older laptop.
              If it runs a browser, it can run CookieSensei.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <div className="text-4xl mb-4">⚡</div>

            <h3 className="text-2xl font-bold mb-4">
              Ready in Seconds
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Open your browser, sign in, and start building.
              Your development environment is already prepared.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <div className="text-4xl mb-4">⚙️</div>

            <h3 className="text-2xl font-bold mb-4">
              Real Engineering Environment
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Learn with VS Code, Git, Python, and modern development tools
              used by professional software engineers.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <div className="text-4xl mb-4">🚀</div>

            <h3 className="text-2xl font-bold mb-4">
              Focus on Learning
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Spend your time understanding concepts, experimenting, and
              building—not troubleshooting installations.
            </p>

          </div>

        </div>

        {/* Closing */}

        <div className="mt-24 text-center">

          <p className="text-3xl md:text-4xl font-semibold">
            Technology should remove barriers.
          </p>

          <p className="text-3xl md:text-4xl font-semibold mt-3 text-blue-400">
            Not create them.
          </p>

        </div>

      </div>

    </section>
  );
}