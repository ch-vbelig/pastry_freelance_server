import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/user.entity";
import {Type} from "./type.entity";
import {Form} from "./form.entity";
import {Body} from "./body.entity";
import {Topping} from "./topping.entity";
import {Cream} from "./cream.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => User, user => user.created_orders)
    user: User

    @ManyToOne( type => User, user => user.responded_orders, {nullable: true})
    baker: User

    @ManyToOne(type => Type, type => type.orders)
    type: Type

    @ManyToOne(type => Form, form => form.orders)
    form: Form

    @ManyToOne(type => Body, body => body.orders)
    body: Body

    @ManyToOne(type => Topping, topping => topping.orders)
    topping: Topping

    @ManyToOne(type => Cream, cream => cream.orders)
    cream: Cream

    @Column({nullable: true})
    price: number

    @Column({default: new Date()})
    date: Date

    @Column({nullable: true})
    delivery_date: Date

    @Column({nullable: true})
    amount: number

    @Column({nullable: true})
    comment: string


}