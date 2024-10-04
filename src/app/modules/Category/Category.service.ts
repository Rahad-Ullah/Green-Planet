import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TCategory } from './Category.interface'
import { Category } from './Category.model'

// create a new category
const createCategoryIntoDB = async (payload: TCategory) => {
  const { category } = payload
  const isCategoryExist = await Category.findOne({ category })
  if (isCategoryExist) {
    throw new AppError(httpStatus.CONFLICT, 'Duplicate Entry')
  }

  const result = await Category.create(payload)
  return result
}

// get single category
const getSingleCategoryFromDB = async (id: string) => {
  const result = await Category.findById(id)
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Category Not Found')
  }

  return result
}

// update category
const updateCategoryIntoDB = async (id: string, payload: TCategory) => {
  const isCategoryExist = await Category.findById(id)
  if (!isCategoryExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Category Not Found')
  }

  const result = await Category.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

// delete category
const deleteCategoryFromDB = async (id: string) => {
  const isCategoryExist = await Category.findById(id)
  if (!isCategoryExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Category Not Found')
  }

  const result = await Category.findByIdAndDelete(id, {
    new: true,
    runValidators: true,
  })
  return result
}

// retrieve all categories
const getAllCategoriesFromDB = async () => {
  const result = await Category.find()
  return result
}

export const CategoryServices = {
  createCategoryIntoDB,
  getSingleCategoryFromDB,
  updateCategoryIntoDB,
  deleteCategoryFromDB,
  getAllCategoriesFromDB,
}
