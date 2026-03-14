export default function Comparison() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why CookieSensei is Different
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border border-gray-800 rounded-xl overflow-hidden">

            <thead className="bg-[#111827] text-left">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4 text-green-400">CookieSensei</th>
                <th className="p-4 text-gray-400">Typical Online Courses</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800">

              <tr>
                <td className="p-4">Small cohort learning</td>
                <td className="p-4 text-green-400">✔ Max 6 students</td>
                <td className="p-4 text-gray-400">❌ Large batches</td>
              </tr>

              {/* <tr>
                <td className="p-4">Hands-on AI projects</td>
                <td className="p-4 text-green-400">✔ Real capstone project</td>
                <td className="p-4 text-gray-400">⚠ Mostly theory</td>
              </tr> */}

              <tr>
                <td className="p-4">Cloud AI development lab</td>
                <td className="p-4 text-green-400">✔ Personal cloud workspace</td>
                <td className="p-4 text-gray-400">❌ Local setup required</td>
              </tr>

              <tr>
                <td className="p-4">GitHub collaboration workflow</td>
                <td className="p-4 text-green-400">✔ Real developer workflow</td>
                <td className="p-4 text-gray-400">❌ Not included</td>
              </tr>

              <tr>
                <td className="p-4">Direct mentorship</td>
                <td className="p-4 text-green-400">✔ Small group guidance</td>
                <td className="p-4 text-gray-400">⚠ Limited access</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </section>
  )
}