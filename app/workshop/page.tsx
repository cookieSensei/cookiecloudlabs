import Link from "next/link";

export default function WorkshopPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* HERO */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🚀 Build Your First AI App in 2 Hours
        </h1>

        <p className="text-lg text-gray-300 mb-4">
          Live hands-on workshop using YOLO, PyTorch & Streamlit
        </p>

        <p className="text-orange-400 font-semibold">
          ⚠️ Only 16 students per batch — limited seats
        </p>
      </div>

      {/* WHAT YOU BUILD */}
      <div className="bg-slate-800 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧠 What You'll Build</h2>

        <ul className="space-y-2">
          <li>📷 Webcam-based Object Detection App</li>
          <li>🧍 People Counter System</li>
          <li>🎯 Real-time bounding boxes + predictions</li>
          <li>🌐 Deployable Streamlit web app</li>
        </ul>
      </div>

      {/* WHY THIS */}
      <div className="bg-slate-800 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">⚡ Why This Workshop is Different</h2>

        <ul className="space-y-2">
          <li>✅ No installation — runs on GPU cloud (CookieCloud Labs)</li>
          <li>✅ Build a complete working AI app (not just theory)</li>
          <li>✅ Beginner-friendly, step-by-step guidance</li>
          <li>✅ Industry tools: YOLOv8, PyTorch, Streamlit</li>
          <li>✅ Small batch = personal attention</li>
        </ul>
      </div>

      {/* WHO IS THIS FOR */}
      <div className="bg-slate-800 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎓 Who Is This For</h2>

        <ul className="space-y-2">
          <li>🎓 Students (1st–4th year)</li>
          <li>🤖 Beginners in AI/ML</li>
          <li>💻 Anyone wanting a real project fast</li>
          <li>🚀 People preparing for internships / placements</li>
        </ul>
      </div>

      {/* WHAT YOU GET */}
      <div className="bg-slate-800 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎁 What You Get</h2>

        <ul className="space-y-2">
          <li>💻 Access to GPU-powered CookieCloud Labs</li>
          <li>📂 Complete source code</li>
          <li>🧠 Understanding of real AI workflows</li>
          <li>📜 Portfolio-ready project</li>
          <li>🤝 Guidance from DTU alumnus founder</li>
        </ul>
      </div>

      {/* DETAILS */}
      <div className="bg-slate-800 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">⏱️ Workshop Details</h2>

        <p>Duration: <b>2 Hours</b></p>
        <p>Mode: <b>Live (Online / Campus)</b></p>
        <p>
          Seats:{" "}
          <span className="text-red-400 font-bold">
            Only 16 students per batch
          </span>
        </p>
        <p>Instructor: <b>Ashish Chaudhary (DTU 2012)</b></p>
      </div>

      {/* OUTCOME */}
      <div className="bg-slate-800 p-6 rounded-xl mb-10">
        <h2 className="text-2xl font-semibold mb-4">💡 Outcome</h2>

        <ul className="space-y-2">
          <li>🚀 Build your first AI app from scratch</li>
          <li>📦 Learn how real-world object detection works</li>
          <li>🌐 Deploy your project as a web app</li>
          <li>🎯 Gain confidence in AI development</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="mb-4 text-lg">
          ⚠️ Seats fill fast. Secure your spot now.
        </p>

        <Link
          href="/enroll?source=workshop"
          className="inline-block px-10 py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl text-lg"
        >
          🚀 Reserve Your Seat
        </Link>
      </div>

    </div>
  );
}