/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { Product } from './product.model'

export const queryProducts = async (query: Record<string, unknown>) => {
  const {
    search = '',
    category = '',
    minPrice = 0,
    maxPrice = 100000,
    sortBy = '',
    sortOrder = 'asc',
    page = 1,
    limit = 10,
  } = query

  // check if the query has any undefined property
  for (const key in query) {
    if (query[key] === 'undefined') {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Query value cannot be undefined',
      )
    }
  }

  // set default query filter
  const filter: any = {
    isDeleted: false,
  }

  // set query search item
  if (search) {
    filter.title = { $regex: search, $options: 'i' }
  }

  // set query filter item
  if (category) {
    filter.category = category
  }

  // set price as filter item
  if (minPrice) {
    filter.price = { ...filter.price, $gte: Number(minPrice) }
  }

  if (maxPrice) {
    filter.price = { ...filter.price, $lte: Number(maxPrice) }
  }

  // query sort opions
  const sortOptions: any = {}
  if (sortBy) {
    sortOptions[sortBy as string | number] = sortOrder === 'asc' ? 1 : -1
  }

  // get products
  const products = await Product.find(filter)
    .sort(sortOptions)
    .skip((Number(page) - 1) * Number(limit))
    .limit(Number(limit))

  const counts = await Product.countDocuments(filter)

  return { products, counts }
}
