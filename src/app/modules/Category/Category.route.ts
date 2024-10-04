import { Router } from 'express'
import { CategoryControllers } from './Category.controller'
import validateRequest from '../../middlewares/validateRequest'
import { CategoryValidations } from './Category.validation'

const router = Router()

// create new category
router.post(
  '/',
  validateRequest(CategoryValidations.createCategoryValidationSchema),
  CategoryControllers.createCategory,
)

// get single category
router.get('/:id', CategoryControllers.getSingleCategory)

// update category
router.patch(
  '/:id',
  validateRequest(CategoryValidations.createCategoryValidationSchema),
  CategoryControllers.updateCategory,
)

// delete category
router.delete('/:id', CategoryControllers.deleteCategory)

// get all categories
router.get('/', CategoryControllers.getAllCategories)

export const CategoryRoutes = router
