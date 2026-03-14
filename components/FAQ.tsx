export default function FAQ() {
  return (
    <section className="py-24 bg-[#0b1220] text-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
            <h3 className="font-semibold text-lg mb-2">
              Do I need programming experience?
            </h3>
            <p className="text-gray-400">
              No. We start with Python basics and gradually move into machine learning and AI concepts.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
            <h3 className="font-semibold text-lg mb-2">
              How many hours per week is the bootcamp?
            </h3>
            <p className="text-gray-400">
              Expect around 14-28 hours per week including live sessions, labs, and project work.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
            <h3 className="font-semibold text-lg mb-2">
              Will sessions be recorded?
            </h3>
            <p className="text-gray-400">
              Yes. All live sessions will be recorded so you can review them later.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
            <h3 className="font-semibold text-lg mb-2">
              What will I build during the program?
            </h3>
            <p className="text-gray-400">
              Students build a real AI capstone project such as an AI resume analyzer or AI study assistant.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
            <h3 className="font-semibold text-lg mb-2">
              Who is this bootcamp for?
            </h3>
            <p className="text-gray-400">
              Non-tech college students and beginners who want to start building real AI projects and gain practical experience.
            </p>
          </div>

          {/* Refund Policy */}
          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
            <h3 className="font-semibold text-lg mb-2">
              What is the refund policy?
            </h3>
            <p className="text-gray-400 mb-2">
              Payments made for CookieCloud Labs programs are refundable within 7 days of purchase if the platform has not been used extensively.
            </p>
            <ul className="text-gray-400 list-disc pl-5 space-y-1">
              <li>Refund requests must be made within 7 days.</li>
              <li>Refunds will be processed within 5–7 business days.</li>
            </ul>
            <p className="text-gray-400 mt-2">
              For refund requests, contact: <span className="text-white">ashishchaudhary62@gmail.com</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}