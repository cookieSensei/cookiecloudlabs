"use client";

import { useState } from "react";

export default function WorkshopApplyPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");

  async function sendToSheet() {

    await fetch("https://script.google.com/macros/s/AKfycby5W3sHm4wtZBx92M7sT7mJQMa9BwPDHL8PwVRJNiRNJhhekMk0-IE5BMPKT-_tzd7uQw/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        name,
        email,
        phone,
        college,
        degree,
        message,
        type: "workshop",   // 🔥 IMPORTANT (differentiate from enroll)
        payment: ""
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

  }

  async function handleApply(e: any) {

    e.preventDefault();

    try {

      await sendToSheet();

      alert("✅ Application submitted! We'll contact you soon.");

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setCollege("");
      setDegree("");
      setMessage("");

    } catch (err) {

      console.error(err);
      alert("❌ Failed to submit. Try again.");

    }

  }

  return (

    <main className="max-w-xl mx-auto py-20 px-6">

      <h1 className="text-3xl font-bold mb-4">
        🚀 Workshop Application
      </h1>

      <p className="text-orange-400 mb-6 font-semibold">
        ⚡ Only 6 seats available in this cohort
      </p>

      <form
        onSubmit={handleApply}
        className="flex flex-col gap-4"
      >

        <input
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="p-3 rounded bg-slate-900 border border-slate-700"
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="p-3 rounded bg-slate-900 border border-slate-700"
        />

        <input
          type="tel"
          placeholder="Phone / WhatsApp"
          required
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          className="p-3 rounded bg-slate-900 border border-slate-700"
        />

        <input
          type="text"
          placeholder="College Name"
          required
          value={college}
          onChange={(e)=>setCollege(e.target.value)}
          className="p-3 rounded bg-slate-900 border border-slate-700"
        />

        <input
          type="text"
          placeholder="Degree (BBA, BCom, Mechanical, etc)"
          required
          value={degree}
          onChange={(e)=>setDegree(e.target.value)}
          className="p-3 rounded bg-slate-900 border border-slate-700"
        />

        <textarea
          placeholder="Ask anything about the workshop, schedule, prerequisites..."
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          className="p-3 rounded bg-slate-900 border border-slate-700 min-h-[120px]"
        />

        <button
          type="submit"
          className="mt-4 bg-orange-500 hover:bg-orange-400 text-black font-semibold py-3 rounded-lg"
        >
          🚀 Apply for Workshop
        </button>

      </form>

    </main>
  );
}