import { Router } from 'express'
import { NewsletterControllers } from './newletter.controller'
import { NewsletterValidations } from './newsletter.validation'
import validateRequest from '../../middlewares/validateRequest'

const router = Router()

// create new Newsletter
router.post(
  '/',
  validateRequest(NewsletterValidations.createNewsletterValidationSchema),
  NewsletterControllers.createNewsletter,
)

// get single Newsletter
router.get('/:id', NewsletterControllers.getSingleNewsletter)

// update Newsletter
router.patch(
  '/:id',
  validateRequest(NewsletterValidations.createNewsletterValidationSchema),
  NewsletterControllers.updateNewsletter,
)

// delete Newsletter
router.delete('/:id', NewsletterControllers.deleteNewsletter)

// get all newsletters
router.get('/', NewsletterControllers.getAllNewsletters)

export const NewsletterRoutes = router
