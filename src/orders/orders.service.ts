import {Injectable, UnauthorizedException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Order} from "./entities/order.entity";
import {Repository} from "typeorm";
import {Filler} from "./entities/filler.entity";
import {Decorator} from "./entities/decorator.entity";
import {Type} from "./entities/type.entity";
import {Style} from "./entities/style.entity";
import {User} from "../users/user.entity";
import {UsersService} from "../users/users.service";

@Injectable()
export class OrdersService {

    constructor(
        @InjectRepository(Order) private orderRepository: Repository<Order>,
        @InjectRepository(Type) private typeRepository: Repository<Type>,
        @InjectRepository(Filler) private fillerRepository: Repository<Filler>,
        @InjectRepository(Decorator) private decoratorRepository: Repository<Decorator>,
        @InjectRepository(Style) private styleRepository: Repository<Style>,
        private userService: UsersService,
    ) {
    }

    async saveOrder(order) {
        let type = await this.typeRepository.findOne({type_tag: order.type_tag})
        let filler = await this.fillerRepository.findOne({filler_tag: order.filler_tag})
        let decorator = await this.decoratorRepository.findOne({decorator_tag: order.decorator_tag})
        let style = await this.styleRepository.findOne({style_tag: order.style_tag})
        let user = await this.userService.findById(order.user_id)
        if (!user){
            throw new UnauthorizedException()
        }

        let newOrder = new Order()
        newOrder.user = user
        newOrder.type = type ? type : await this.typeRepository.save( new Type(order.type_tag))
        newOrder.filler = filler ? filler : await this.fillerRepository.save(new Filler(order.filler_tag))
        newOrder.decorator = decorator ? decorator : await this.decoratorRepository.save(new Decorator(order.decorator_tag))
        newOrder.style = style ? style : await this.styleRepository.save(new Style(order.style_tag))
        newOrder.user = user
        newOrder.amount = order.amount
        newOrder.price = order.price
        newOrder.comment = order.comment
        newOrder.date = new Date()

        const createdOrder = await this.orderRepository.save(newOrder)

        const result = this.orderRepository.findOne(createdOrder.id, {relations: ["user", "type"]})

        return result
    }
}