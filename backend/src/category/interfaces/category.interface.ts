import { Document } from 'mongoose'
import { Dish } from 'src/category/interfaces/dish.interface'

export interface Category extends Document {
  readonly title: string,
  readonly url: string,
  readonly icon: string,
  dishes: Array<Dish>
}