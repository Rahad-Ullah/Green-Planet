import { z } from 'zod'

// validation schema for category
const createCategoryValidationSchema = z.object({
  body: z.object({
    category: z.string().min(1, { message: 'Category is required' }),
    image: z.string().min(1, { message: 'Image is required' }),
  }),
})

export const CategoryValidations = {
  createCategoryValidationSchema,
}
