import {Body, Controller, Post, UseGuards} from "@nestjs/common";
import {OrdersService} from "./orders.service";
import {Order} from "./entities/order.entity";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller("orders")
export class OrdersController{

    constructor(private readonly ordersService: OrdersService) {
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    saveOrder(@Body() order){
        return this.ordersService.saveOrder(order)
    }
}