import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMenuDTO } from './dto/create-menu.dto';
import { Menu } from './interfaces/menu.interface';
import { Order } from './interfaces/order.interface';

@Injectable()
export class MenuService {
  constructor(@InjectModel('Menu') private readonly menuModel: Model<Menu>) { }

  async getMenus() {
    const menu = await this.menuModel
      .find()
    return menu
  }
  
  async getMenu(date: string) {
    const menu = await this.menuModel
      .findOne({ date: date})
    return menu
  }

  async addMenu(Body: CreateMenuDTO): Promise<Menu> {
    const menu = {...Body}
    menu.orders = []
    const newMenu = await new this.menuModel(menu)
    return newMenu.save()
  }

  async addOrder(Body) {
    const date = Body.date
    const menu = await this.menuModel
      .findOne({ date: date})
    const order = {...Body}
    order.line = menu.orders.length + 1
    menu.orders.push(order)
    return menu.save()
  }

  async getLine(Body) {
    const date = Body.date
    const menu = await this.menuModel
      .findOne({ date: date})
    return menu.orders.length
  }
}
