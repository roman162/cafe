import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dish } from './interfaces/dish.interface';
import { CreateDishDTO } from './dto/create-dish.dto';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class DishService {
  constructor(@InjectModel('Dish') private readonly dishModel: Model<Dish>, private categoryService: CategoryService) { }

  async getDishes(): Promise<Dish[]> {
    const dishes = await this.dishModel.find().exec();
    return dishes
  }

  async getDish(dishID): Promise<Dish> {
    const dish = await this.dishModel
      .findById(dishID)
      .exec();
    return dish
  }

  async addDish(Body: CreateDishDTO): Promise<Dish> {
    const dish = {...Body}
    const newDish = await new this.dishModel(dish)
    this.categoryService.addDishCategory(newDish)
    return newDish.save()
  }
}
