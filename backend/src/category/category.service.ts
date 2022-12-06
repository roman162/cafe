import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dish } from 'src/dish/interfaces/dish.interface';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { Category } from './interfaces/category.interface';

@Injectable()
export class CategoryService {
  static addDishCategory(dish: { title: string; price: number; weight: number; image: string; category: string; }) {
    throw new Error('Method not implemented.');
  }
  static getCategory(category: string) {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel('Category') private readonly categoryModel: Model<Category>) { }

  async getCategories(): Promise<Category[]> {
    const categories = await this.categoryModel.find().exec();
    return categories
  }

  async getCategory(cat: string) {
    const category = await this.categoryModel
      .findOne({ url: cat})
    return category
  }

  async addDishCategory(dish: Dish) {
    const category = await this.categoryModel
      .findOne({ url: dish.category})
      category.dishes.push(dish)
    return category.save()
  }

  async addCategory(Body: CreateCategoryDTO): Promise<Category> {
    const category = {...Body}
    category.dishes = []
    const newCategory = await new this.categoryModel(category)
    return newCategory.save()
  }
}
