export default function CloudLabs() {
  return (
    <section className="py-24 bg-zinc-950 text-white text-center px-6">

      <h2 className="text-4xl font-bold mb-6">
        Hands-On Cloud Labs
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        No installations. No environment setup.

        Every student gets a preconfigured AI coding environment
        directly in the browser.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">
            No Setup Required
          </h3>
          <p className="text-gray-400">
            Skip installing Python, libraries, and ML frameworks.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">
            Browser Based
          </h3>
          <p className="text-gray-400">
            Just open your browser and start coding instantly.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">
            Preconfigured AI Stack
          </h3>
          <p className="text-gray-400">
            Python, ML libraries, and datasets ready to use.
          </p>
        </div>

      </div>

    </section>
  )
}