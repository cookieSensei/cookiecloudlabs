export default function Internship() {
  return (
    <section className="w-full py-20 bg-[#0b1220] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">

          <p className="text-yellow-400 text-sm uppercase tracking-wider mb-3">
            4 Week Cohort Bootcamp
          </p>

          <h2 className="text-4xl font-bold mb-4">
            AI / ML Engineering Bootcamp
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Learn Artificial Intelligence and Machine Learning by building real AI systems.
            This bootcamp focuses on practical engineering skills, real developer workflows,
            and collaboration like professional AI engineers.
          </p>

        </div>


        {/* Bootcamp Structure */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Week 1–2 */}
          <div className="bg-[#111827] p-8 rounded-xl border border-gray-800">

            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
              Week 1–2: AI Foundations
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>• Python for AI development</li>
              <li>• Exploratory Data Analysis</li>
              <li>• NumPy & Pandas</li>
              <li>• Machine Learning with Scikit-Learn</li>
              <li>• Deep Learning with TensorFlow</li>
              <li>• Data Visualization (Matplotlib & Seaborn)</li>
            </ul>

            <p className="mt-6 text-gray-400 text-sm">
              Students build the core skills required to work with AI systems
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
              During the final two weeks, students collaborate on a real AI
              system and build a production-style capstone project together.
            </p>

          </div>

        </div>


        {/* Engineering Workflow */}
        {/* Cloud Labs Section */}
        <div className="mt-20 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Hands-On Cloud AI Labs
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Every student gets access to a cloud coding environment.
            No installations, no environment setup issues.

            Just open your browser and start building AI models instantly.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-gray-300">

            <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
              <h3 className="font-semibold text-lg mb-2">
                No Setup Required
              </h3>
              <p className="text-gray-400 text-sm">
                Skip installing Python, ML libraries, and complex environments.
              </p>
            </div>

            <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
              <h3 className="font-semibold text-lg mb-2">
                Runs in Your Browser
              </h3>
              <p className="text-gray-400 text-sm">
                Open the lab in your browser and start coding immediately.
              </p>
            </div>

            <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
              <h3 className="font-semibold text-lg mb-2">
                Preconfigured AI Stack
              </h3>
              <p className="text-gray-400 text-sm">
                Python, NumPy, Pandas, TensorFlow and other AI tools are ready to use.
              </p>
            </div>

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
              <p>🧠 2 Weeks Learning AI Foundations</p>
              <p>🚀 2 Weeks Building the Capstone Project</p>
              <p>☁️ Browser-Based Cloud AI Labs</p>
              <p>👥 Maximum 6 Students Per Cohort</p>

            </div>


            {/* Bootcamp Pricing */}
            <div className="p-6 border border-white/10 rounded-xl bg-white/5">

              <h3 className="text-2xl font-semibold mb-4">
                Bootcamp Fee
              </h3>

              <p className="text-xl font-bold text-green-400 mb-4">
                ₹3,999 Early Cohort Price
                </p>

                <p className="text-gray-400 text-sm mb-4">
                Regular price ₹14,999
                </p>

              <p className="mb-2">Includes:</p>

              <ul className="list-disc ml-6 space-y-1 text-gray-300">
                <li>4 Week AI / ML Engineering Bootcamp</li>
                <li>Cloud AI development environment</li>
                <li>Team capstone project collaboration</li>
                <li>Real-world GitHub workflow</li>
              </ul>

            </div>

          </div>



          {/* RIGHT SIDE — VIDEO DEMO */}
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

            {/* NEW LINE */}
            <p className="text-green-400 text-center mt-2">
              Students receive their own personal AI lab environment.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}