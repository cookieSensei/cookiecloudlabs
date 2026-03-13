import Image from "next/image";

export default function Founder() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-black via-slate-950 to-black text-center">
      
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Meet the Founder
      </h2>

      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Founder Image */}
          <div className="flex-shrink-0">
            <img
              src="/founder.jpg"  // Make sure this image exists inside /public
              alt="Ashish Chaudhary"
              className="w-48 h-60 object-cover rounded-3xl border-4 border-purple-500 shadow-xl"
            />
          </div>

          {/* Founder Content */}
          <div className="text-left max-w-3xl">

            <p className="text-lg text-gray-300 mb-6">
              Hi, I’m <span className="font-semibold text-white">Ashish Chaudhary</span>, 
              founder of <span className="text-purple-400 font-semibold">CookieCloud Labs</span>.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              I started building this because I kept seeing students struggle 
              with something that shouldn’t be the hardest part of learning AI — 
              setting up the environment.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Installing libraries. Fixing dependency issues. Version conflicts. 
              Laptops hanging during simple tasks.
            </p>

            <p className="text-xl font-semibold text-white mb-10">
              Students don’t lack capability. They lack proper infrastructure.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919582025965?text=Hi%20Ashish,%20I%20want%20to%20apply%20for%20the%20CookieCloud%20internship."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition duration-300 text-center"
              >
                Apply via WhatsApp  
                <div className="text-sm font-normal mt-1">
                  +91 95820 25965
                </div>
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/ashish-chaudhary-150353196/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition duration-300 text-center"
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