export default function Audience() {
  return (
    <section className="py-24 bg-black text-white">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Who This Bootcamp Is For
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#111827] p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              Perfect For
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>• College students curious about AI</li>
              <li>• Beginners learning machine learning</li>
              <li>• Students building a tech portfolio</li>
              <li>• People interested in AI careers</li>
            </ul>
          </div>

          <div className="bg-[#111827] p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold text-red-400 mb-4">
              Not Ideal For
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>• Advanced ML researchers</li>
              <li>• Senior AI engineers</li>
              <li>• People seeking deep math theory</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  )
}