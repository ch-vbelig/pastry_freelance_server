import {Injectable, UnauthorizedException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Order} from "./entities/order.entity";
import {Repository} from "typeorm";
import {Type} from "./entities/type.entity";
import {UsersService} from "../users/users.service";
import {Form} from "./entities/form.entity";
import {Body} from "./entities/body.entity";
import {Topping} from "./entities/topping.entity";
import {Cream} from "./entities/cream.entity";
import {OrderCreateDto} from "./dto/OrderCreateDto";

@Injectable()
export class OrdersService {

    constructor(
        @InjectRepository(Order) private orderRepository: Repository<Order>,
        @InjectRepository(Type) private typeRepository: Repository<Type>,
        @InjectRepository(Form) private formRepository: Repository<Form>,
        @InjectRepository(Body) private bodyRepository: Repository<Body>,
        @InjectRepository(Topping) private toppingRepository: Repository<Topping>,
        @InjectRepository(Cream) private creamRepository: Repository<Cream>,
        private userService: UsersService,
    ) {
    }

    async saveOrder(user_id: number, order: OrderCreateDto) {
        let type = await this.typeRepository.findOne({type_tag: order.type_tag})
        let form = await this.formRepository.findOne({form_tag: order.form_tag})
        let body = await this.bodyRepository.findOne({body_tag: order.body_tag})
        let topping = await this.toppingRepository.findOne({topping_tag: order.topping_tag})
        let cream = await this.creamRepository.findOne({cream_tag: order.cream_tag})
        let user = await this.userService.findById(user_id)
        if (!user){
            throw new UnauthorizedException()
        }

        let newOrder = new Order()
        newOrder.user = user
        newOrder.type = type ? type : await this.typeRepository.save( new Type(order.type_tag))
        newOrder.form = form ? form : await this.formRepository.save(new Form(order.form_tag))
        newOrder.body = body ? body : await this.bodyRepository.save(new Body(order.body_tag))
        newOrder.topping = topping ? topping : await this.toppingRepository.save(new Topping(order.topping_tag))
        newOrder.cream = cream ? cream : await this.creamRepository.save(new Cream(order.cream_tag))
        newOrder.user = user
        newOrder.date = new Date()

        const createdOrder = await this.orderRepository.save(newOrder)

        const result = this.orderRepository.findOne(createdOrder.id, {relations: ["user", "type", "form", "body", "topping", "cream"]})

        return result
    }

    async getAllOrders(){
        const result = await this.orderRepository.find({relations: ["user", "type", "form", "body", "topping", "cream"]})
        return result
    }
}