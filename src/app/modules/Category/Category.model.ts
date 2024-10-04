import { model, Schema } from 'mongoose'
import { TCategory } from './Category.interface'

// category schema
const categorySchema = new Schema<TCategory>(
  {
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

// category model
export const Category = model<TCategory>('Category', categorySchema)
