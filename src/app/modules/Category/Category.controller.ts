import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import { CategoryServices } from './Category.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

// create new category
const createCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CategoryServices.createCategoryIntoDB(req.body)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Category created successfully',
      data: result,
    })
  },
)

//  update category
const updateCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await CategoryServices.updateCategoryIntoDB(id, req.body)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Category updated successfully',
      data: result,
    })
  },
)

//  delete category
const deleteCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await CategoryServices.deleteCategoryFromDB(id)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Category deleted successfully',
      data: result,
    })
  },
)

// get all categories
const getAllCategories: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CategoryServices.getAllCategoriesFromDB()

    if (!result.length) {
      sendResponse(res, {
        success: false,
        statusCode: httpStatus.NOT_FOUND,
        message: 'No Data Found',
        data: result,
      })
      return
    }

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Categories retrieved successfully',
      data: result,
    })
  },
)

export const CategoryControllers = {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
}
