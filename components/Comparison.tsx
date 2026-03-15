export default function Comparison() {
  const rows = [
    { feature: "Full Linux workspace", cookiecloud: "✅", colab: "❌" },
    { feature: "VS Code IDE", cookiecloud: "✅", colab: "❌" },
    { feature: "Git workflow", cookiecloud: "✅", colab: "Limited" },
    { feature: "Pull requests", cookiecloud: "✅", colab: "❌" },
    { feature: "Team repos", cookiecloud: "✅", colab: "❌" },
    { feature: "Terminal access", cookiecloud: "✅", colab: "Limited" },
    { feature: "Docker support", cookiecloud: "✅", colab: "❌" },
  ]

  return (
    <section className="py-24 px-6 bg-[#020C2B] text-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Built for Real AI Engineering
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Colab is great for experiments. CookieCloud is built for engineers.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full">

            {/* Header */}
            <thead className="bg-slate-900">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-300">
                  Feature
                </th>

                <th className="text-center p-4 font-semibold text-green-400">
                  CookieCloud
                </th>

                <th className="text-center p-4 font-semibold text-gray-300">
                  Google Colab
                </th>
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-slate-800 hover:bg-slate-900/40 transition"
                >
                  <td className="p-4 text-gray-300">
                    {row.feature}
                  </td>

                  <td className="p-4 text-center text-green-400 font-semibold">
                    {row.cookiecloud}
                  </td>

                  <td className="p-4 text-center text-gray-400">
                    {row.colab}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Positioning */}
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-green-400">
            “Colab is for experiments. CookieCloud is for engineers.”
          </p>
        </div>

      </div>
    </section>
  )
}