import { z } from "zod";

// Schema for validating user ID in params
export const userIdParamsSchema = z.object({
  id: z.coerce.number().int().positive("ID must be a positive integer"),
});

// Schema for validating query parameters
export const userQuerySchema = z.object({
  page: z.coerce.number().int().positive("Page must be a positive integer").optional(),
  limit: z.coerce.number().int().positive("Limit must be a positive integer").optional(),
});

const normalizePhoneNumber = (phone: string) => {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "");
  // Format as (XXX) XXX-XXXX
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

// Schema for validating request body
export const userBodySchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.coerce.number().int().positive("Invalid age value"),
  email: z.string().email("Invalid email address"),
  usPhone: z.coerce
    .string()
    .regex(/^\d{10}$/, "Invalid US phone number (expected 10 digits)")
    .transform(normalizePhoneNumber), // '1234567890' -> "(123) 456-7890", '123-456-7890' -> "(123) 456-7890"
});

/** Replace in controller function for type auto complete */
export type UserBody = z.infer<typeof userBodySchema>;
export type UserQuery = z.infer<typeof userQuerySchema>;
export type UserParams = z.infer<typeof userIdParamsSchema>;
