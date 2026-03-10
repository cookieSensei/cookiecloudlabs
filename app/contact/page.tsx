export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-bold mb-6">
        Contact CookieSensei
      </h1>

      <p className="text-gray-300 mb-6">
        For bootcamp enrollment, support, or platform access inquiries,
        feel free to contact us using the details below.
      </p>

      <div className="space-y-3 text-gray-300">

        <p><strong>Founder:</strong> Ashish Chaudhary</p>

        <p><strong>Business:</strong> CookieCloud Labs</p>

        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:ashishchaudhary62@gmail.com"
            className="text-blue-400 hover:underline"
          >
            ashishchaudhary62@gmail.com
          </a>
        </p>

        <p>
          <strong>Phone / WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/919582025965"
            className="text-green-400 hover:underline"
          >
            +91 95820 25965
          </a>
        </p>

      </div>

      <div className="mt-8">

        <a
          href="https://wa.me/919582025965"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Message on WhatsApp
        </a>

      </div>

      <p className="mt-10 text-gray-400 text-sm">
        Typical response time: within 24 hours.
      </p>

    </main>
  );
}