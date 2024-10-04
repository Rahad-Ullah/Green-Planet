import { Product } from '../Product/product.model';
import { TOrder } from './order.interface'
import { Order } from './order.model'

// create new order into DB
const createOrderIntoDB = async (payload: TOrder) => {
  const result = await Order.create(payload)

   // Update each product's quantity
   for (const { product, quantity } of payload.products) {
    await Product.findByIdAndUpdate(product, { $inc: { quantity: -quantity } });
  }

  return result
}

// retrieve all orders
const getOrdersFromDB = async () => {
    const result = await Order.find()

    return result
}

export const OrderServices = {
  createOrderIntoDB,
  getOrdersFromDB,
}
