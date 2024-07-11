import AppError from '../../errors/AppError'
import { TProduct } from './product.interface'
import { Product } from './product.model'
import httpStatus from 'http-status'

const createProductIntoDB = async (payload: TProduct) => {
  const { title } = payload

  // check if the product already exist
  const isProductExist = await Product.findOne({ title })
  if (isProductExist) {
    throw new AppError(httpStatus.CONFLICT, 'This product already exist')
  }

  const result = await Product.create(payload)

  return result
}

export const ProductServices = {
  createProductIntoDB,
}
