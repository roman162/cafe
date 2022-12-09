import { Document } from 'mongoose'
import { Category } from './category.interface'
import { Order } from './order.interface'

export interface Menu extends Document {
  readonly date: Date
  readonly menu: Array<Category>
  readonly orders: Array<Order>
}