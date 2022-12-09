import { Document } from "mongoose";
import { Order } from "src/category/interfaces/order.interface";
import { User } from "src/user/interfaces/user.interface";

export interface Dayorder extends Document {
  readonly day: Array<Order>
  readonly user: User
}