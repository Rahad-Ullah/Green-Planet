import { z } from 'zod'

// order Item validation schema
const orderItemValidationSchema = z.object({
  product: z.string({
    message: 'Product ID is required',
  }),
  quantity: z.number().min(1, { message: 'Quantity must be at least 1' }),
  price: z.number().min(0, { message: 'Price must be a positive number' }),
})

// validation schema for Order
const createOrderValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    phone: z.string().min(1, { message: 'Phone is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    address: z.string().min(1, { message: 'Address is required' }),
    subTotal: z
      .number()
      .min(0, { message: 'Subtotal must be a positive number' }),
    shipping: z
      .number()
      .min(0, { message: 'Shipping must be a positive number' }),
    total: z.number().min(0, { message: 'Total must be a positive number' }),
    payment_type: z.enum(['Online', 'COD']),
    payment_status: z.enum(['Paid', 'Unpaid']),
    products: z.array(orderItemValidationSchema),
  }),
})

export const OrderValidations = {
  createOrderValidationSchema,
}
