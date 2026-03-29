import Image from "next/image";

export default function Founder() {
  return (
    <section className="py-28 px-6 text-white">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Meet the Founder
      </h2>

      {/* Container */}
      <div className="max-w-6xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8 md:p-12">

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="/founder.jpg"
              alt="Ashish Chaudhary"
              className="w-44 h-56 object-cover rounded-xl border border-gray-700"
            />
          </div>

          {/* Content */}
          <div className="text-left max-w-3xl">

            <p className="text-lg text-gray-300 mb-5">
              Hi, I’m{" "}
              <span className="font-semibold text-white">
                Ashish Chaudhary
              </span>
              , founder of{" "}
              <span className="text-blue-400 font-semibold">
                CookieSensei
              </span>.
            </p>

            <p className="text-gray-400 mb-5 leading-relaxed">
              I started building this because I kept seeing students struggle 
              with something that shouldn’t be the hardest part of learning AI —
              setting up the environment.
            </p>

            <p className="text-gray-400 mb-5 leading-relaxed">
              Installing libraries. Fixing dependency issues. Version conflicts.
              Laptops hanging during simple tasks.
            </p>

            <p className="text-lg font-semibold text-white mb-8">
              Students don’t lack capability. They lack proper infrastructure.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* WhatsApp */}
              <a
                href="https://wa.me/919582025965?text=Hi%20Ashish,%20I%20want%20to%20apply%20for%20the%20CookieCloud%20internship."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-semibold transition text-center"
              >
                Apply via WhatsApp
                <div className="text-sm text-green-200 mt-1">
                  +91 95820 25965
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ashish-chaudhary-150353196/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-semibold transition text-center"
              >
                Connect on LinkedIn
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}