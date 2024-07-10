import { z } from 'zod'

// vaidation for create new product
const createProductValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    category: z.string({ required_error: 'Category is required' }),
    price: z.number({ required_error: 'Price is required' }),
    quantity: z.number({ required_error: 'Quantity is required' }),
    rating: z.number({ required_error: 'Rating is required' }),
    description: z.string({ required_error: 'Description is required' }),
    image: z.string({ required_error: 'Image is required' }),
  }),
})

// vaidation for update product
const updateProductValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }).optional(),
    category: z.string({ required_error: 'Category is required' }).optional(),
    price: z.number({ required_error: 'Price is required' }).optional(),
    quantity: z.number({ required_error: 'Quantity is required' }).optional(),
    rating: z.number({ required_error: 'Rating is required' }).optional(),
    description: z
      .string({ required_error: 'Description is required' })
      .optional(),
    image: z.string({ required_error: 'Image is required' }).optional(),
  }),
})

export const productValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
}
