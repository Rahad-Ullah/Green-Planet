import { Router } from 'express'
import { OrderControllers } from './order.controller'
import validateRequest from '../../middlewares/validateRequest'
import { OrderValidations } from './order.validation'

const router = Router()

// create new order
router.post(
  '/',
  validateRequest(OrderValidations.createOrderValidationSchema),
  OrderControllers.createOrder,
)

// retrieve orders
router.get('/', OrderControllers.getAllOrders)

export const OrderRoutes = router
