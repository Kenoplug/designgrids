import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().min(2),
  budget: z.string().min(2),
  timeline: z.string().min(2),
  message: z.string().min(20)
});

export const newsletterSchema = z.object({
  email: z.string().email()
});
