import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import { ProductServices } from './product.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import AppError from '../../errors/AppError'

// create new product
const createProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProductServices.createProductIntoDB(req.body)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Product added successfully',
      data: result,
    })
  },
)

// get all products
const getAllProducts: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProductServices.getAllProductsFromDB()

    // check if the result is empty
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
      message: 'Products retrieved successfully',
      data: result,
    })
  },
)

export const ProductControllers = {
  createProduct,
  getAllProducts,
}
