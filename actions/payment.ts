"use server";

import { PAYMENT_STATUS } from "@/lib/constants/workshop";
import { createRazorpayOrder } from "@/services/payment.service";
import {
  getRegistrationForPayment,
  saveRazorpayOrderId,
} from "@/services/workshop.service";

export async function createWorkshopOrder(
  registrationId: number
) {
  const registration =
    await getRegistrationForPayment(registrationId);

  if (!registration) {
    throw new Error("Registration not found");
  }

  if (
    registration.payment_status === PAYMENT_STATUS.PAID
  ) {
    throw new Error("Registration has already been paid.");
  }

  const order = await createRazorpayOrder(
    registration.workshop.price,
    `registration_${registration.id}`
  );

  await saveRazorpayOrderId(
    registration.id,
    order.id
  );

  return {
    id: order.id,
    amount: order.amount,
    currency: order.currency,
  };
}