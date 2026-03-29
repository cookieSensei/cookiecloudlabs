export default function Internship() {
  return (
    <section className="w-full py-20  text-white">
      <div className="max-w-7xl mx-auto px-6">

        


        {/* Achievements + Video */}
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            <h3 className="text-3xl font-semibold mb-6">
              What You'll Achieve
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-gray-300">

              <p>✔ Build a real AI / ML capstone project</p>
              <p>✔ Contribute to a shared GitHub repository</p>
              <p>✔ Collaborate like real AI engineers</p>
              <p>✔ Learn the industry AI workflow</p>
              <p>✔ Build a strong AI portfolio</p>
              <p>✔ Gain practical machine learning experience</p>

            </div>

          </div>


          {/* RIGHT SIDE VIDEO */}
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

            <p className="text-green-400 text-center mt-2">
              Students receive their own personal AI lab environment.
            </p>

          </div>

        </div>


        {/* Bootcamp Details + Pricing */}
        <div className="mt-20 grid md:grid-cols-2 gap-16 items-start">

          {/* DETAILS */}
          <div>

            <h3 className="text-3xl font-semibold mb-6">
              Bootcamp Details
            </h3>

            <div className="space-y-3 text-gray-300">

              <p>🗓 Duration: <span className="font-semibold">4 Weeks</span></p>

              <p>🧠 2 Weeks Learning AI Foundations</p>

              <p>🚀 2 Weeks Building the Capstone Project</p>

              <p>☁️ Browser-Based Cloud AI Labs</p>

              <p>👥 Maximum 6 Students Per Cohort</p>

            </div>

          </div>


          {/* PRICE CARD */}
          <div className="bg-[#111827] p-8 rounded-xl border border-gray-800">

            <h3 className="text-2xl font-semibold mb-4">
              Bootcamp Fee
            </h3>

            <p className="text-2xl font-bold text-green-400 mb-2">
              ₹3,999 Early Cohort Price
            </p>

            <p className="text-gray-400 text-sm mb-6">
              Regular price ₹14,999
            </p>

            <p className="mb-3 font-semibold">
              Includes:
            </p>

            <ul className="list-disc ml-6 space-y-2 text-gray-300">

              <li>4 Week AI / ML Engineering Bootcamp</li>
              <li>Cloud AI development environment</li>
              <li>Team capstone project collaboration</li>
              <li>Real-world GitHub workflow</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}