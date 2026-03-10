export default function Internship() {
  return (
    <section className="w-full py-20 bg-[#0b1220] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            AI / ML Engineering Bootcamp
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Learn Artificial Intelligence by building real AI systems.
            This bootcamp focuses on practical skills, real engineering workflows,
            and collaboration like professional AI engineers.
          </p>
        </div>

        {/* Bootcamp Structure */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Week 1–2 */}
          <div className="bg-[#111827] p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
              Week 1–2: Learn AI Skills
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>• Python for AI</li>
              <li>• Exploratory Data Analysis</li>
              <li>• NumPy & Pandas</li>
              <li>• Machine Learning with Scikit-Learn</li>
              <li>• Deep Learning with TensorFlow</li>
              <li>• Data Visualization (Matplotlib & Seaborn)</li>
            </ul>

            <p className="mt-6 text-gray-400 text-sm">
              Students learn the core skills required to build real AI systems
              and prepare for the final capstone project.
            </p>
          </div>

          {/* Week 3–4 */}
          <div className="bg-[#111827] p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
              Week 3–4: Final AI Capstone Project
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>• Join a shared GitHub repository</li>
              <li>• Contribute code using Git</li>
              <li>• Work on a real AI system</li>
              <li>• Create pull requests</li>
              <li>• Participate in code reviews</li>
              <li>• Collaborate like real AI engineers</li>
            </ul>

            <p className="mt-6 text-gray-400 text-sm">
              Students collaborate on a real AI project and build a
              production-style capstone system together.
            </p>
          </div>

        </div>

        {/* Workflow Section */}
        <div className="mt-20">

          <h3 className="text-3xl font-semibold text-center mb-10">
            Real Engineering Workflow
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-gray-300">

            <ul className="space-y-3">
              <li>• Cloud-based coding workspace</li>
              <li>• Preconfigured AI development stack</li>
              <li>• GPU access for deep learning</li>
              <li>• Full VS Code development environment</li>
            </ul>

            <ul className="space-y-3">
              <li>• Join a shared GitHub repository</li>
              <li>• Collaborative team workflow</li>
              <li>• Pull requests & code reviews</li>
              <li>• Build projects like real AI engineers</li>
            </ul>

          </div>
        </div>


        {/* Bootcamp + Video Section */}
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            {/* Achievements */}
            <h3 className="text-3xl font-semibold mb-6">
              What You'll Achieve
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-gray-300 mb-12">

              <p>✔ Build a real AI / ML capstone project</p>
              <p>✔ Contribute to a shared GitHub repository</p>
              <p>✔ Collaborate like real AI engineers</p>
              <p>✔ Learn the industry AI workflow</p>
              <p>✔ Build a strong AI portfolio</p>
              <p>✔ Gain practical machine learning experience</p>

            </div>

            {/* Bootcamp Details */}
            <h3 className="text-3xl font-semibold mb-6">
              Bootcamp Details
            </h3>

            <div className="space-y-3 text-gray-300 mb-10">
              <p>🗓 Duration: <span className="font-semibold">4 Weeks</span></p>
              <p>🧠 2 Weeks Learning AI Fundamentals</p>
              <p>🚀 2 Weeks Building a Real AI Capstone Project</p>
              <p>☁️ Cloud Labs Included</p>
              <p>👥 Maximum 6 Students Per Cohort</p>
            </div>

            {/* Bootcamp Pricing */}
            <div className="p-6 border border-white/10 rounded-xl bg-white/5">

              <h3 className="text-2xl font-semibold mb-4">
                Bootcamp Fee
              </h3>

              <p className="text-xl font-bold text-green-400 mb-4">
                ₹29,999
              </p>

              <p className="mb-2">Includes:</p>

              <ul className="list-disc ml-6 space-y-1 text-gray-300">
                <li>Cloud AI development environment</li>
                <li>4-week AI engineering bootcamp</li>
                <li>Capstone project collaboration</li>
              </ul>

            </div>

          </div>


          {/* RIGHT SIDE — VIDEO DEMO */}
          <div>

            <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-lg">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/CLvnbPW2qwA"
                title="CookieSensei AI Cloud Lab Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

            </div>

            <p className="text-gray-400 text-sm mt-4 text-center">
              Watch how the CookieSensei cloud AI lab works
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}