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

// retrieve single product
const getSingleProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await ProductServices.getSingleProductFromDB(id)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Product retrieved successfully',
      data: result,
    })
  },
)

// update existing product
const updateProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await ProductServices.updateProductIntoDB(id, req.body)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Product updated successfully',
      data: result,
    })
  },
)

// delete product by id
const deleteProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await ProductServices.deleteProductFromDB(id)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Product deleted successfully',
      data: result,
    })
  },
)

// get all products
const getAllProducts: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProductServices.getAllProductsFromDB(req.query)

    // check if the result is empty
    if (!result.products.length) {
      sendResponse(res, {
        success: false,
        statusCode: httpStatus.OK,
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
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
}
