// lib/constants/workshop.ts

export const REGISTRATION_STATUS = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  ATTENDED: "Attended",
  CANCELLED: "Cancelled",
} as const;

export const PAYMENT_STATUS = {
  PENDING: "pending",
  PAID: "paid",
  FAILED: "failed",
  REFUNDED: "refunded",
} as const;