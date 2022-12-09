import { Document } from 'mongoose'
import { Dish } from './dish.interface'

export interface Order extends Document {
  readonly user: string
  readonly dishes: Array<Dish>
  readonly line: number
  readonly price: number
}