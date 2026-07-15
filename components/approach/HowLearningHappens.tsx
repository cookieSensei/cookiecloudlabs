export default function HowLearningHappens() {
  return (
    <section className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-24">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
            The Learning Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Every lesson begins with curiosity.
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed">
            Learning Programming and Artificial Intelligence isn't about
            memorizing concepts. It's about gradually developing the confidence
            to solve problems on your own.
          </p>

        </div>

        {/* Journey */}

        <div className="max-w-3xl mx-auto">

          {/* Step 1 */}

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

            <div className="text-blue-400 font-semibold mb-3">
              STEP 1
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Start with a Real-World Problem
            </h3>

            <p className="text-lg text-gray-400 leading-relaxed">
              Every lesson begins with a meaningful challenge that sparks
              curiosity and gives students a reason to learn.
            </p>

          </div>

          <div className="text-center text-4xl my-8 text-gray-600">
            ↓
          </div>

          {/* Step 2 */}

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

            <div className="text-blue-400 font-semibold mb-3">
              STEP 2
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Build a Solution
            </h3>

            <p className="text-lg text-gray-400 leading-relaxed">
              Students begin building before they know everything. Confidence
              grows through experimentation, mistakes, and iteration.
            </p>

          </div>

          <div className="text-center text-4xl my-8 text-gray-600">
            ↓
          </div>

          {/* Step 3 */}

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

            <div className="text-blue-400 font-semibold mb-3">
              STEP 3
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Understand Why It Works
            </h3>

            <p className="text-lg text-gray-400 leading-relaxed">
              Once students have built something, we explore the programming
              and AI concepts that explain why their solution works.
            </p>

          </div>

          <div className="text-center text-4xl my-8 text-gray-600">
            ↓
          </div>

          {/* Step 4 */}

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

              <h4 className="font-bold text-xl mb-3">
                Practice
              </h4>

              <p className="text-gray-400">
                Improve your solution through repetition and refinement.
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

              <h4 className="font-bold text-xl mb-3">
                Share
              </h4>

              <p className="text-gray-400">
                Discuss ideas, ask questions, and learn with others.
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

              <h4 className="font-bold text-xl mb-3">
                Continue
              </h4>

              <p className="text-gray-400">
                Keep learning long after the course has ended.
              </p>

            </div>

          </div>

        </div>

        {/* Closing */}

        <div className="mt-24 text-center">

          <p className="text-3xl md:text-4xl font-semibold">
            Every project builds technical skills.
          </p>

          <p className="text-3xl md:text-4xl font-semibold mt-3 text-blue-400">
            Every lesson builds confidence.
          </p>

        </div>

      </div>

    </section>
  );
}