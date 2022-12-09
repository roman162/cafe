import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { MenuSchema } from './schemas/menu.schemas';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Menu', schema: MenuSchema }])
 ],
  providers: [MenuService],
  controllers: [MenuController]
})
export class MenuModule { }
