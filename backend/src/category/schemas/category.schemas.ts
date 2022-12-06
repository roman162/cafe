import * as mongoose from 'mongoose'

export const CategorySchema = new mongoose.Schema({
  title: String,
  url: String,
  icon: String,
  dishes: Array
})