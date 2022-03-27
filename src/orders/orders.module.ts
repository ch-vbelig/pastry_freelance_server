import { Module} from "@nestjs/common";
import {OrdersService} from "./orders.service";
import {OrdersController} from "./orders.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Order} from "./entities/order.entity";
import {UsersModule} from "../users/users.module";
import {Type} from "./entities/type.entity";
import {Form} from "./entities/form.entity";
import {Body} from "./entities/body.entity";
import {Topping} from "./entities/topping.entity";
import {Cream} from "./entities/cream.entity";

@Module({
    imports: [UsersModule, TypeOrmModule.forFeature([Order, Type, Form, Body, Topping, Cream])],
    controllers: [OrdersController],
    providers: [OrdersService]
})
export class OrdersModule{}