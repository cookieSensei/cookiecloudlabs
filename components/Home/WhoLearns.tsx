export default function WhoLearns() {
  return (
    <section className="py-28 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
          Who Learns at CookieSensei?
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg">
          Programming and AI aren't just for software engineers anymore.
          Whether you're a student, a working professional, or building your own business,
          technology can help you solve problems that matter to you.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Students */}

          <div className="bg-[#111827] border border-gray-800 rounded-xl p-8">

            <div className="text-5xl mb-5 text-center">
              🎓
            </div>

            <h3 className="text-2xl font-semibold text-center mb-4">
              Students
            </h3>

            <p className="text-gray-400 leading-relaxed text-center">
              Whether you're studying MBA, BBA, Commerce, Arts,
              Engineering, or any other discipline,
              learn practical programming and AI skills through
              real-world projects.
            </p>

          </div>

          {/* Professionals */}

          <div className="bg-[#111827] border border-gray-800 rounded-xl p-8">

            <div className="text-5xl mb-5 text-center">
              💼
            </div>

            <h3 className="text-2xl font-semibold text-center mb-4">
              Professionals
            </h3>

            <p className="text-gray-400 leading-relaxed text-center">
              Learn how to use AI to automate repetitive work,
              analyze information faster, and become more effective
              in your current role, even if you've never written code before.
            </p>

          </div>

          {/* Entrepreneurs */}

          <div className="bg-[#111827] border border-gray-800 rounded-xl p-8">

            <div className="text-5xl mb-5 text-center">
              🚀
            </div>

            <h3 className="text-2xl font-semibold text-center mb-4">
              Entrepreneurs
            </h3>

            <p className="text-gray-400 leading-relaxed text-center">
              Turn your ideas into working prototypes without waiting
              for a technical co-founder.
              Learn enough programming and AI to validate your ideas
              and build your first product.
            </p>

          </div>

        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center">

          <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
            You don't need a Computer Science degree
            <br />
            to start building with AI.
          </p>

          <p className="mt-6 text-gray-400 text-lg">
            You just need curiosity and the willingness to learn.
          </p>

        </div>

      </div>

    </section>
  );
}