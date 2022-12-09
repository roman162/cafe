import { Document } from 'mongoose'
import { Category } from 'src/category/interfaces/category.interface'
import { Dayorder } from './dayorder.interface'

export interface Menu extends Document {
  readonly date: String
  readonly categories: Array<Category>
  readonly orders: Array<Dayorder>
}