"use client";

import { useState } from "react";

export default function EnrollPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");

  // 🛑 BOT TRAP (honeypot)
  const [company, setCompany] = useState("");

  async function sendToSheet(type: string) {

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
        type,
        payment: type === "enrollment" ? "pending" : "",
        secret: "mysecret123" // 🔐 MUST match Google Script
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

  }

  async function handleEnroll(e: any) {

    e.preventDefault();

    // 🛑 BOT BLOCK
    if (company) return;

    // ✅ BASIC VALIDATION
    if (!name || !email || !phone || !college || !degree) {
      alert("Please fill all required fields");
      return;
    }

    try {

      await sendToSheet("enrollment");

      const res = await fetch("/api/create-order", {
        method: "POST"
      });

      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: order.amount,
        currency: "INR",
        order_id: order.id,
        name: "CookieSensei Bootcamp",
        description: "AI/ML Engineering Bootcamp",

        prefill: {
          name,
          email,
          contact: phone
        },

        handler: function () {
          alert("Payment successful! Welcome to the bootcamp.");
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();

    } catch (err) {

      console.error(err);
      alert("Payment initialization failed");

    }
  }

  async function handleQuery() {

    // 🛑 BOT BLOCK
    if (company) return;

    // ✅ BASIC VALIDATION
    if (!name || !email) {
      alert("Please enter your name and email");
      return;
    }

    try {

      await sendToSheet("query");

      alert("Your query has been sent! We'll contact you soon.");

      setMessage("");

    } catch {

      alert("Failed to send query.");

    }

  }

  return (

    <main className="max-w-xl mx-auto py-20 px-6">

      <h1 className="text-3xl font-bold mb-4">
        Bootcamp Enrollment
      </h1>

      <p className="text-yellow-400 mb-8 font-semibold">
        ⚡ Only 6 seats available in this cohort
      </p>

      <form
        onSubmit={handleEnroll}
        className="flex flex-col gap-4"
      >

        {/* 🛑 HONEYPOT FIELD (hidden from users) */}
        <input
          type="text"
          value={company}
          onChange={(e)=>setCompany(e.target.value)}
          style={{ display: "none" }}
        />

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
          placeholder="Ask anything about the bootcamp..."
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          className="p-3 rounded bg-slate-900 border border-slate-700 min-h-[120px]"
        />

        <p className="text-sm text-slate-400">
          Not sure yet? Send us a question before enrolling.
        </p>

        <div className="flex gap-4 mt-2">

          <button
            type="button"
            onClick={handleQuery}
            className="flex-1 border border-slate-600 text-slate-300 py-3 rounded-lg hover:bg-slate-800"
          >
            Send Query
          </button>

          <button
            type="submit"
            className="flex-1 bg-yellow-500 text-black font-semibold py-3 rounded-lg"
          >
            Enroll Now
          </button>

        </div>

      </form>

    </main>
  );
}