import * as mongoose from 'mongoose'

export const MenuSchema = new mongoose.Schema({
  date: String,
  categories: Array,
  orders: Array,
  id: String
})