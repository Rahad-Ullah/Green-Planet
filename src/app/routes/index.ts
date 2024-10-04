import { Router } from 'express'
import { ProductRoutes } from '../modules/Product/product.route'
import { OrderRoutes } from '../modules/Order/order.route'
import { CategoryRoutes } from '../modules/Category/Category.route'
import { NewsletterRoutes } from '../modules/Newsletter/newsletter.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/newsletters',
    route: NewsletterRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
