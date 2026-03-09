import Razorpay from "razorpay";

export async function POST(req: Request) {

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const price = 29999;

  const order = await razorpay.orders.create({
    amount: price * 100,
    currency: "INR",
  });

  return Response.json(order);
}