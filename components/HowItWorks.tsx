export default function HowItWorks() {
  return (
    <section className="py-20 px-6 text-white">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">
        How It Works
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {/* Step 1 */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-left">
          <p className="text-xs text-gray-500 mb-2">STEP 1</p>
          <h3 className="text-lg font-semibold mb-2">
            Get your cloud lab
          </h3>
          <p className="text-gray-400 text-sm">
            Pre-configured environment, ready instantly. No setup required.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-left">
          <p className="text-xs text-gray-500 mb-2">STEP 2</p>
          <h3 className="text-lg font-semibold mb-2">
            Pick a system
          </h3>
          <p className="text-gray-400 text-sm">
            Work on real AI projects — not tutorials or toy examples.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-left">
          <p className="text-xs text-gray-500 mb-2">STEP 3</p>
          <h3 className="text-lg font-semibold mb-2">
            Build & ship
          </h3>
          <p className="text-gray-400 text-sm">
            Use Git, PRs, debugging, and deployment workflows.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-left">
          <p className="text-xs text-gray-500 mb-2">STEP 4</p>
          <h3 className="text-lg font-semibold mb-2">
            Show your work
          </h3>
          <p className="text-gray-400 text-sm">
            Graduate with real projects and a strong portfolio.
          </p>
        </div>

      </div>

    </section>
  )
}