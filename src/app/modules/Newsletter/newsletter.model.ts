import { model, Schema } from 'mongoose'
import { TNewsletter } from './newsletter.interface'

// newsletter schema
const newsletterSchema = new Schema<TNewsletter>(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

// newsletter model
export const Newsletter = model<TNewsletter>('Newsletter', newsletterSchema)
