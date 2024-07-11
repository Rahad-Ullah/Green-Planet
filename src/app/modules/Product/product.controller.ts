import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import { ProductServices } from './product.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

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

export const ProductControllers = {
  createProduct,
}
