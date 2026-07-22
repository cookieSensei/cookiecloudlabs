import { razorpay } from "@/lib/razorpay";

export async function createRazorpayOrder(
  amountInRupees: number,
  receipt: string
) {
  return razorpay.orders.create({
    amount: Math.round(amountInRupees * 100), // Razorpay expects paise
    currency: "INR",
    receipt,
  });
}