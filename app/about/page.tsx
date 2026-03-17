"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-12">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6 leading-tight"
        >
          Learn AI by Building — Not Struggling
        </motion.h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          CookieSensei removes the friction of setup so you can focus on what
          actually matters: building real AI projects.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="bg-white text-black px-6 py-3 rounded-xl font-medium"
          >
            Start Learning
          </Link>

          {/* <Link
            href="/gallery"
            className="border border-gray-600 px-6 py-3 rounded-xl"
          >
            Explore Lab Images
          </Link> */}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="max-w-4xl mx-auto mb-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {["100+ Students", "50+ Projects", "10+ Tools", "0 Setup"].map(
          (item, i) => (
            <div key={i} className="bg-zinc-800 rounded-xl p-6">
              <p className="font-semibold">{item}</p>
            </div>
          )
        )}
      </section>

      {/* PROBLEM */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6">The Problem</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Python installs break",
            "Library conflicts waste hours",
            "ML models crash your laptop",
            "You never actually start building",
          ].map((item, i) => (
            <div key={i} className="bg-zinc-800 p-6 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6">Our Solution</h2>

        <p className="text-gray-300 text-lg">
          A fully configured cloud AI workspace that works instantly — so you
          can skip setup and start building from day one.
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mb-20 grid md:grid-cols-2 gap-8">
        {[
          "Start coding in minutes",
          "Build real-world AI projects",
          "Use GitHub like real devs",
          "Graduate with a portfolio",
        ].map((item, i) => (
          <div key={i} className="bg-zinc-800 p-6 rounded-2xl">
            <p className="font-medium">{item}</p>
          </div>
        ))}
      </section>

      {/* DIFFERENT */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6">Why We’re Different</h2>

        <div className="space-y-4">
          <div className="bg-zinc-800 p-6 rounded-xl">
            Most platforms teach — we make you build
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl">
            No theory overload — only practical work
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl">
            Real tools, real workflow, real outcomes
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="max-w-5xl mx-auto mb-24 flex flex-col md:flex-row items-center gap-10">
        <Image
          src="/founder.jpg"
          alt="Founder"
          width={160}
          height={160}
          className="rounded-2xl"
        />

        <div>
          <h2 className="text-3xl font-semibold mb-4">Meet the Founder</h2>
          <p className="text-gray-300">
            Ashish Chaudhary built CookieSensei after seeing students spend more
            time fixing environments than actually learning. The mission is
            simple: remove friction and help people build faster.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to Start Building AI?
        </h2>

        <Link
          href="/"
          className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
        >
          Get Started Now
        </Link>
      </section>

    </main>
  );
}