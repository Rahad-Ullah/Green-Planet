import AppError from '../../errors/AppError'
import { TProduct } from './product.interface'
import { Product } from './product.model'
import httpStatus from 'http-status'

// create new product
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

// get single product by id
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id)

  // check if the product exist
  if (!result) {
    throw new AppError(httpStatus.CONFLICT, 'This product is not found')
  }

  return result
}

// get all products
const getAllProductsFromDB = async () => {
  const result = await Product.find()

  return result
}

export const ProductServices = {
  createProductIntoDB,
  getSingleProductFromDB,
  getAllProductsFromDB,
}
