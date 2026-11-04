import { z } from 'zod';

// ✅ Le contrat strict d'une réservation
export const BookingSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  totalprice: z.number().positive(),
  depositpaid: z.boolean(),
  bookingdates: z.object({
    checkin: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // Format YYYY-MM-DD obligatoire
    checkout: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  }),
  additionalneeds: z.string().optional(),
});

// ✅ Le contrat de la réponse de création
export const CreateBookingResponseSchema = z.object({
  bookingid: z.number(),
  booking: BookingSchema,
});