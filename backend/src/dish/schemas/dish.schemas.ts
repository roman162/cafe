import * as mongoose from 'mongoose'

export const DishSchema = new mongoose.Schema({
  title: String,
  price: Number,
  weight: Number,
  image: String,
  category: String
})