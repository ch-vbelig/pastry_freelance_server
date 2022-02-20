import {Body, Controller, Post} from "@nestjs/common";
import {OrdersService} from "./orders.service";
import {Order} from "./entities/order.entity";

@Controller("orders")
export class OrdersController{

    constructor(private readonly ordersService: OrdersService) {
    }

    @Post()
    saveOrder(@Body() order){
        return this.ordersService.saveOrder(order)
    }
}