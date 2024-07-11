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

// retrieve single product
router.get('/:id', ProductControllers.getSingleProduct)

// update product
router.patch(
  '/:id',
  validateRequest(productValidation.updateProductValidationSchema),
  ProductControllers.updateProduct,
)

// delete product
router.delete('/:id', ProductControllers.deleteProduct)


// retrieve all products
router.get('/', ProductControllers.getAllProducts)

export const ProductRoutes = router
