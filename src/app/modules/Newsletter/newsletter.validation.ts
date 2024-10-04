import { z } from 'zod'

// validation schema for Newsletter
const createNewsletterValidationSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Email is invalid' }),
  }),
})

export const NewsletterValidations = {
  createNewsletterValidationSchema,
}
