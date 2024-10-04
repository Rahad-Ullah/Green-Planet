import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { NewsletterServices } from './newletter.service'

// create new Newsletter
const createNewsletter: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await NewsletterServices.createNewsletterIntoDB(req.body)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Newsletter created successfully',
      data: result,
    })
  },
)

//  get single Newsletter
const getSingleNewsletter: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await NewsletterServices.getSingleNewsletterFromDB(id)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Newsletter retrived successfully',
      data: result,
    })
  },
)

//  update Newsletter
const updateNewsletter: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await NewsletterServices.updateNewsletterIntoDB(id, req.body)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Newsletter updated successfully',
      data: result,
    })
  },
)

//  delete Newsletter
const deleteNewsletter: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await NewsletterServices.deleteNewsletterFromDB(id)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Newsletter deleted successfully',
      data: result,
    })
  },
)

// get all Newsletters
const getAllNewsletters: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await NewsletterServices.getAllNewslettersFromDB()

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
      message: 'Newsletters retrieved successfully',
      data: result,
    })
  },
)

export const NewsletterControllers = {
  createNewsletter,
  getSingleNewsletter,
  updateNewsletter,
  deleteNewsletter,
  getAllNewsletters,
}
