import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DishSchema } from './schemas/dish.schemas';
import { CategoryService } from 'src/category/category.service';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Dish', schema: DishSchema }]),
    CategoryModule
  ],
  providers: [DishService, CategoryService],
  controllers: [DishController]
})
export class DishModule { }
