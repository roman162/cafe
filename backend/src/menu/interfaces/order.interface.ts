import { Document } from 'mongoose'
import { Dish } from 'src/category/interfaces/dish.interface'

export interface Order extends Document {
  readonly dishes: Array<Dish>
  readonly line: number
  readonly price: number
}