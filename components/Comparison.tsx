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
    <section id="comparison" className="py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Built for Real AI Engineering
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Colab is great for experiments. CookieCloud Labs is built for engineers.
        </p>

        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full">

            <thead className="bg-white/5">
              <tr>
                <th className="text-left p-4 text-gray-300">Feature</th>
                <th className="text-center p-4 text-green-400 font-semibold">
                  CookieCloud Labs
                </th>
                <th className="text-center p-4 text-gray-400">
                  Google Colab
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-white/10 hover:bg-white/5"
                >
                  <td className="p-4 text-gray-300">{row.feature}</td>

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

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-green-400">
            “Colab is for experiments. CookieCloud Labs is for engineers.”
          </p>
        </div>

      </div>
    </section>
  )
}