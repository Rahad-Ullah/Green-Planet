import { ObjectId } from 'mongoose'

export type TOrderItem = {
  product: ObjectId
  quantity: number
  price: number
}

export type TOrder = {
  name: string
  phone: string
  email: string
  address: string
  subTotal: number
  shipping: number
  total: number
  payment_type: 'Online' | 'COD'
  payment_status: 'Paid' | 'Unpaid'
  products: TOrderItem[]
}
