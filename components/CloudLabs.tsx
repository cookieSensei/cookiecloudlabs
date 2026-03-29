export default function CloudLabs() {
  return (
    <section className="py-28 text-white text-center px-6">

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Stop Setting Up. Start Building.
      </h2>

      {/* Subheadline */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
        Every student gets a fully pre-configured cloud lab.
        No installs. No dependency issues. Just open your browser and start shipping real AI systems.
      </p>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">
            ⚡ Instant Setup
          </h3>
          <p className="text-gray-400">
            Skip hours of installing Python, CUDA, and libraries.
            Your environment is ready in seconds.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">
            🌐 Fully Browser-Based
          </h3>
          <p className="text-gray-400">
            No local machine issues. Code, run, and build directly in your browser.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">
            🤖 Production AI Stack
          </h3>
          <p className="text-gray-400">
            Preloaded with Python, ML frameworks, datasets, and real project scaffolding.
          </p>
        </div>

      </div>

      {/* Contrast Section */}
      <div className="mt-20 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h4 className="text-red-400 font-semibold mb-3">
            ❌ Typical Learning
          </h4>
          <ul className="text-gray-400 space-y-2">
            <li>Spend days fixing installs</li>
            <li>Dependency errors everywhere</li>
            <li>Follow tutorials passively</li>
            <li>Build toy projects</li>
          </ul>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h4 className="text-green-400 font-semibold mb-3">
            ✅ CookieSensei Cloud Labs
          </h4>
          <ul className="text-gray-400 space-y-2">
            <li>Start coding in minutes</li>
            <li>Zero setup, zero friction</li>
            <li>Work like real engineers</li>
            <li>Ship real AI systems</li>
          </ul>
        </div>

      </div>

      {/* Bottom punch line */}
      <p className="mt-16 text-gray-500 text-sm">
        This isn’t a course. It’s a real engineering environment.
      </p>

    </section>
  )
}