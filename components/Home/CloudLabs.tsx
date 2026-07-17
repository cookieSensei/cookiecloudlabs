export default function CloudLabs() {
  return (
    <section className="py-28 text-white px-6">

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Learning Shouldn't Start With Installation
        </h2>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Your first programming class should begin with writing code, not
          downloading software or wondering whether your computer is powerful
          enough.
        </p>

      </div>

      {/* Features */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">

          <div className="text-4xl mb-4">🌐</div>

          <h3 className="text-xl font-semibold mb-3">
            Learn From Any Computer
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Whether you're using Windows, macOS, Linux, or an older laptop,
            all you need is a web browser to start learning.
          </p>

        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">

          <div className="text-4xl mb-4">⚡</div>

          <h3 className="text-xl font-semibold mb-3">
            Everything Is Ready
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Programming languages, AI tools, and learning resources are already
            prepared for you, so you can spend your time learning instead of
            setting things up.
          </p>

        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">

          <div className="text-4xl mb-4">🎯</div>

          <h3 className="text-xl font-semibold mb-3">
            Focus On Learning
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Follow along with live classes, complete projects, experiment with
            ideas, and build confidence without worrying about technical
            obstacles.
          </p>

        </div>

      </div>

      {/* Highlight */}
      <div className="mt-20 max-w-5xl mx-auto bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-2xl p-10">

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
          CookieSensei Cloud Labs
        </h3>

        <p className="text-center text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          We built CookieSensei Cloud Labs so you can focus on learning,
          experimenting, and solving real-world problems, instead of spending
          your time trying to make software work on your own computer.
        </p>

      </div>

    </section>
  );
}