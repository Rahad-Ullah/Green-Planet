/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from './product.model'

export const queryProducts = async (query: Record<string, unknown>) => {
  const {
    search,
    category,
    minPrice,
    maxPrice,
    sortBy,
    sortOrder = 'asc',
    page = 1,
    limit = 10,
  } = query

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

  return products
}
