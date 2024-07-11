import { model, Schema } from 'mongoose'
import { TCartItem, TOrder } from './order.interface'

// TCartItem schema
const cartItemSchema = new Schema<TCartItem>({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product', // Product model
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

// order schema
const orderSchema = new Schema<TOrder>({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  subTotal: {
    type: Number,
    required: true,
  },
  shipping: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  payment_type: {
    type: String,
    enum: ['Online', 'COD'],
    default: 'COD',
  },
  payment_status: {
    type: String,
    enum: ['Paid', 'Unpaid'],
    default: 'Unpaid',
  },
  products: {
    type: [cartItemSchema],
    required: true,
  },
})

// Order model
export const Order = model<TOrder>('Order', orderSchema)
