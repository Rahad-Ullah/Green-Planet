import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TNewsletter } from './newsletter.interface'
import { Newsletter } from './newsletter.model'

// create a new newsletter
const createNewsletterIntoDB = async (payload: TNewsletter) => {
  const { email } = payload
  const isNewsletterExist = await Newsletter.findOne({ email })
  if (isNewsletterExist) {
    throw new AppError(httpStatus.CONFLICT, 'Duplicate Entry')
  }

  const result = await Newsletter.create(payload)
  return result
}

// get single newsletter
const getSingleNewsletterFromDB = async (id: string) => {
  const result = await Newsletter.findById(id)
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Newsletter Not Found')
  }

  return result
}

// update newsletter
const updateNewsletterIntoDB = async (id: string, payload: TNewsletter) => {
  const isNewsletterExist = await Newsletter.findById(id)
  if (!isNewsletterExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Newsletter Not Found')
  }

  const result = await Newsletter.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

// delete Newsletter
const deleteNewsletterFromDB = async (id: string) => {
  const isNewsletterExist = await Newsletter.findById(id)
  if (!isNewsletterExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Newsletter Not Found')
  }

  const result = await Newsletter.findByIdAndDelete(id, {
    new: true,
    runValidators: true,
  })
  return result
}

// retrieve all newsletters
const getAllNewslettersFromDB = async () => {
  const result = await Newsletter.find()
  return result
}

export const NewsletterServices = {
  createNewsletterIntoDB,
  getSingleNewsletterFromDB,
  updateNewsletterIntoDB,
  deleteNewsletterFromDB,
  getAllNewslettersFromDB,
}
