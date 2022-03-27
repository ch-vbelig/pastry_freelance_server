import {Body, Controller, Post, Request, UseGuards} from "@nestjs/common";
import {OrdersService} from "./orders.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {OrderCreateDto} from "./dto/OrderCreateDto";

@Controller("orders")
export class OrdersController{

    constructor(private readonly ordersService: OrdersService) {
    }

    @UseGuards(JwtAuthGuard)
    @Post("create")
    saveOrder(@Request() req, @Body() order: OrderCreateDto){
        console.log("Class: OrdersController\nMethod: saveOrder()\nMessage: User from token:", req.user, "\n")
        return this.ordersService.saveOrder(req.user.id, order)
    }

    @Post("show")
    getAllOrders(){
        return this.ordersService.getAllOrders()
    }
}