import { Document } from 'mongoose'

export interface Dish extends Document {
  readonly title: string,
  readonly price: number,
  readonly weight: number,
  readonly image: string,
  readonly category: string
}