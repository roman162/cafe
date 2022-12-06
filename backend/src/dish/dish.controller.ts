import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { DishService } from './dish.service';
import { CreateDishDTO } from './dto/create-dish.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';


@Controller('dishes')
export class DishController {

    constructor(private dishService: DishService) { }

    @Get('dishes')
    async getDishes(@Res() res) {
        const dishes = await this.dishService.getDishes();
        return res.status(HttpStatus.OK).json(dishes);
    }

    @Get('dish/:dishID')
    async getDish(@Res() res, @Param('dishId', new ValidateObjectId()) dishID) {
        const dish = await this.dishService.getDish(dishID);
        if (!dish) throw new NotFoundException('dish does not exist!');
        return res.status(HttpStatus.OK).json(dish);

    }

    @Post('/dish')
    async addDish(@Res() res, @Body() createDishDTO: CreateDishDTO) {
        const newDish = await this.dishService.addDish(createDishDTO);
        return res.status(HttpStatus.OK).json({
            message: "Dish has been submitted successfully!",
            user: newDish
        })
    }
}