"use client";

export default function EnrollButton() {

  async function handlePayment() {

    const res = await fetch("/api/create-order", {
      method: "POST",
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: order.amount,
      currency: "INR",
      order_id: order.id,
      name: "CookieSensei Bootcamp",
      description: "AI/ML Engineering Bootcamp",
      handler: function () {
        alert("Payment successful!");
      },
      theme: {
        color: "#6366f1"
      }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }

  return (
    <button
      onClick={handlePayment}
      className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
    >
      Enroll
    </button>
  );
}