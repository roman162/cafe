import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { Dish } from 'src/category/interfaces/dish.interface';


@Controller('categories')
export class CategoryController {

    constructor(private categoryService: CategoryService) { }

    @Get('categories')
    async getCategories(@Res() res) {
        const categories = await this.categoryService.getCategories();
        return res.status(HttpStatus.OK).json(categories);
    }

    @Get('category/:id')
    async getCategory(@Res() res, @Param() params) {
        const category = await this.categoryService.getCategory(params.id);
        if (!category) throw new NotFoundException('category does not exist!');
        return res.status(HttpStatus.OK).json(category);
    }

    @Post('/category')
    async addCategory(@Res() res, @Body() createCategoryDTO: CreateCategoryDTO) {
        const newCategory = await this.categoryService.addCategory(createCategoryDTO);
        return res.status(HttpStatus.OK).json({
            message: "Category has been submitted successfully!",
            category: newCategory
        })
    }

    @Post('/dish')
    async addDish(@Res() res, @Body() createDishDTO: Dish) {
        const newCategory = await this.categoryService.addDish(createDishDTO);
        return res.status(HttpStatus.OK).json({
            message: "Category has been submitted successfully!",
            category: newCategory
        })
    }
}