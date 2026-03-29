"use client";

import Founder from "@/components/Founder";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-12 relative">

      {/* Blue glow background (matches landing vibe) */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-28 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6 leading-tight"
        >
          Stop Setting Up. Start Building.
        </motion.h1>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Most people don’t fail at AI because it’s hard.
          They fail because setup kills momentum.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="bg-white text-black px-6 py-3 rounded-xl font-medium"
          >
            Start Building
          </Link>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="max-w-4xl mx-auto mb-28 relative">
        <h2 className="text-3xl font-bold mb-10 text-center">
          The Reality of Learning AI
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Spend days installing Python, CUDA, and libraries",
            "Your laptop crashes running ML models",
            "Environment issues block real progress",
            "You rely on Colab → sessions reset, work lost",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 p-6 rounded-xl"
            >
              ❌ {item}
            </div>
          ))}
        </div>
      </section>

      {/* CLOUD LABS */}
      <section className="py-20 px-6 text-center relative">

        <h2 className="text-4xl font-bold mb-6">
          This is Why We Built Cloud Labs
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
          A fully pre-configured AI environment that runs in your browser —
          so you can focus on building, not debugging.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">⚡ Instant Setup</h3>
            <p className="text-gray-400">
              No installs. No CUDA errors. Start instantly.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">🌐 Browser-Based</h3>
            <p className="text-gray-400">
              Works on any laptop. No crashes, no limits.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">🤖 Real AI Stack</h3>
            <p className="text-gray-400">
              Preloaded tools, datasets, and real project workflows.
            </p>
          </div>

        </div>
      </section>

      {/* BEFORE vs AFTER */}
      <section className="mt-20 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left mb-28">

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h4 className="text-red-400 font-semibold mb-3">
            ❌ Without Cloud Labs
          </h4>
          <ul className="text-gray-400 space-y-2">
            <li>Spend days fixing installs</li>
            <li>Dependency errors everywhere</li>
            <li>Follow tutorials passively</li>
            <li>Build toy projects</li>
          </ul>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h4 className="text-green-400 font-semibold mb-3">
            ✅ CookieSensei Cloud Labs
          </h4>
          <ul className="text-gray-400 space-y-2">
            <li>Start coding in minutes</li>
            <li>Zero setup, zero friction</li>
            <li>Work like real engineers</li>
            <li>Ship real AI systems</li>
          </ul>
        </div>

      </section>

      {/* OUTCOMES */}
      <section className="max-w-5xl mx-auto mb-28 grid md:grid-cols-2 gap-8">
        {[
          "Build real-world AI projects",
          "Use GitHub like engineers",
          "Deploy working systems",
          "Graduate with a strong portfolio",
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl"
          >
            🚀 {item}
          </div>
        ))}
      </section>

      {/* FOUNDER */}
      <section className="max-w-6xl mx-auto mb-28">
        <Founder />
      </section>

      {/* CTA */}
      <section className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Instead of Struggle?
        </h2>

        <Link
          href="/"
          className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
        >
          Start Now
        </Link>
      </section>

    </main>
  );
}