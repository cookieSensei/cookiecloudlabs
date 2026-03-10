"use client";

import { useState } from "react";

export default function EnrollPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(e:any) {
    e.preventDefault();

    try {

        // SEND DATA TO GOOGLE SHEET
        await fetch("https://script.google.com/macros/s/AKfycby5W3sHm4wtZBx92M7sT7mJQMa9BwPDHL8PwVRJNiRNJhhekMk0-IE5BMPKT-_tzd7uQw/exec", {
        method: "POST",
        body: JSON.stringify({
            name,
            email,
            phone
        }), headers: {
            "Content-Type": "application/json"
        }
        });



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

  return (

    <main className="max-w-xl mx-auto py-20 px-6">

      <h1 className="text-3xl font-bold mb-4">
        Bootcamp Enrollment
      </h1>

      <p className="text-yellow-400 mb-8 font-semibold">
        ⚡ Only 6 seats available in this cohort
      </p>

      <form
        onSubmit={handleSubmit}
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

        <button
          type="submit"
          className="bg-yellow-500 text-black font-semibold py-3 rounded-lg mt-4"
        >
          Proceed to Payment
        </button>

      </form>

    </main>
  );
}