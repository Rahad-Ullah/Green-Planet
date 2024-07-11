import { Router } from 'express'
import { ProductControllers } from './product.controller'
import validateRequest from '../../middlewares/validateRequest'
import { productValidation } from './product.validation'

const router = Router()

// create new product
router.post(
  '/',
  validateRequest(productValidation.createProductValidationSchema),
  ProductControllers.createProduct,
)

export const ProductRoutes = router
