import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { CreateMenuDTO } from './dto/create-menu.dto';
import { CreateOrderDTO } from './dto/create-order.dto';
import { MenuService } from './menu.service';


@Controller('menu')
export class MenuController {

    constructor(private menuService: MenuService) { }

    @Get('menus')
    async getMenus(@Res() res) {
        const menu = await this.menuService.getMenus();
        if (!menu) throw new NotFoundException('menu does not exist!');
        return res.status(HttpStatus.OK).json(menu);
    }

    @Get('menu/:date')
    async getMenu(@Res() res, @Param() params) {
        const menu = await this.menuService.getMenu(params.date);
        if (!menu) throw new NotFoundException('menu does not exist!');
        return res.status(HttpStatus.OK).json(menu);
    }

    @Post('menu')
    async addMenu(@Res() res, @Body() createMenuDTO: CreateMenuDTO) {
        const newMenu = await this.menuService.addMenu(createMenuDTO);
        return res.status(HttpStatus.OK).json({
            message: "Menu has been submitted successfully!",
            menu: newMenu
        })
    }

    @Post('order')
    async addOrder(@Res() res, @Body() createOrderDTO: CreateOrderDTO) {
        const newOrder = await this.menuService.addOrder(createOrderDTO);
        const line = await this.menuService.getLine(createOrderDTO)
        return res.status(HttpStatus.OK).json({
            message: "Order has been submitted successfully!",
            order: newOrder,
            line: line
        })
    }

    // @Get('/menu/:id')
    // async getMenu(@Res() res, @Param() params) {
    //     const newMenu = await this.menuService.addMenu(createMenuDTO);
    //     return res.status(HttpStatus.OK).json({
    //         message: "Menu has been submitted successfully!",
    //         menu: newMenu
    //     })
    // }

    // @Post('/dish')
    // async addDish(@Res() res, @Body() createDishDTO: Dish) {
    //     const newCategory = await this.menuService.addDish(createDishDTO);
    //     return res.status(HttpStatus.OK).json({
    //         message: "Category has been submitted successfully!",
    //         category: newCategory
    //     })
    // }

    // @Post('/menu')
    // async addMenu(@Res() res, @Body() createMenuDTO: Menu) {
    //     const newMenu = await this.menuService.addMenu(createMenuDTO);
    //     return res.status(HttpStatus.OK).json({
    //         message: "Menu has been submitted successfully!",
    //         menu: newMenu
    //     })
    // }
}