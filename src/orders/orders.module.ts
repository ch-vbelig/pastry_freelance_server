import {Module} from "@nestjs/common";
import {OrdersService} from "./orders.service";
import {OrdersController} from "./orders.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Order} from "./entities/order.entity";
import {UsersModule} from "../users/users.module";
import {Filler} from "./entities/filler.entity";
import {Style} from "./entities/style.entity";
import {Decorator} from "./entities/decorator.entity";
import {Type} from "./entities/type.entity";

@Module({
    imports: [UsersModule, TypeOrmModule.forFeature([Order, Type, Filler, Style, Decorator])],
    controllers: [OrdersController],
    providers: [OrdersService]
})
export class OrdersModule{}