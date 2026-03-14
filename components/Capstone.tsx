export default function Capstone() {
  return (
    <section className="py-24 bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-10">
          AI Projects You'll Build
        </h2>

        <div className="grid md:grid-cols-2s gap-8">

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              AI Resume Analyzer
            </h3>
            <p className="text-gray-400">
              Upload resumes and use AI to analyze candidate strengths.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              AI Study Assistant
            </h3>
            <p className="text-gray-400">
              Build a chatbot that answers questions from PDFs and notes.
            </p>
          </div>

        

        </div>
      </div>
    </section>
  )
}