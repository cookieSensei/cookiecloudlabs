"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Closing() {

  const [open, setOpen] = useState(false);

  return (
    <>

      <section className="py-40 px-6 border-t border-slate-800">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="font-bold leading-tight text-[clamp(2.5rem,6vw,5rem)]">
            Every learner
            <br />
            starts with
            <br />
            a question.
          </h2>

          <p className="mt-10 text-2xl md:text-3xl font-medium text-blue-400">
            Let's begin there.
          </p>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row justify-center">

            <button
              onClick={() => setOpen(true)}
              className="rounded-xl bg-blue-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-600"
            >
              Send a Message
            </button>

            <a
              href="https://wa.me/919582025965"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-blue-500 px-8 py-4 text-lg font-semibold text-blue-400 transition hover:bg-blue-500 hover:text-white"
            >
              Ask on WhatsApp
            </a>

          </div>

        </div>

      </section>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </>
  );
}