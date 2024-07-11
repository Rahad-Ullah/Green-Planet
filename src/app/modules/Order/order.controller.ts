import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { OrderServices } from './order.service'

// create new order
const createOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await OrderServices.createOrderIntoDB(req.body)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Order placed successfully',
      data: result,
    })
  },
)

// get all orders
const getAllOrders: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await OrderServices.getOrdersFromDB()

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
      message: 'Order retrieved successfully',
      data: result,
    })
  },
)

export const OrderControllers = {
  createOrder,
  getAllOrders,
}
