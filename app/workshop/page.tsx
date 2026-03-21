import Link from "next/link"

export default function WorkshopPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        🚀 Build Your First AI App in 2 Hours
      </h1>

      <p className="text-lg text-gray-300 mb-8">
        Live hands-on workshop using YOLO, PyTorch & Streamlit
      </p>

      <div className="bg-slate-800 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧠 What You'll Build</h2>
        <ul className="space-y-2 text-left">
          <li>📷 Webcam Object Detection App</li>
          <li>🧍 People Counter System</li>
          <li>🎯 Real-time predictions</li>
          <li>🌐 Deployable app</li>
        </ul>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">⚡ Why This Workshop</h2>
        <ul className="space-y-2 text-left">
          <li>✅ No installation (GPU cloud)</li>
          <li>✅ Build real project in 2 hours</li>
          <li>✅ Beginner friendly</li>
          <li>✅ Industry tools (YOLO, PyTorch)</li>
        </ul>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">⏱️ Details</h2>
        <p>Duration: 2 Hours</p>
        <p>Seats: <span className="text-red-400 font-bold">Only 16 students</span></p>
        <p>Instructor: Ashish Chaudhary (DTU 2012)</p>
      </div>

      



        <Link href="/enroll">
        <button className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl text-lg">
            🚀 Reserve Your Seat
        </button>
        </Link>

    </div>
  );
}