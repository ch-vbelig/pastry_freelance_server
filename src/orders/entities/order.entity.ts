import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/user.entity";
import {Type} from "./type.entity";
import {Filler} from "./filler.entity";
import {Decorator} from "./decorator.entity";
import {Style} from "./style.entity";

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

    @ManyToOne(type => Filler, filler => filler.orders)
    filler: Filler

    @ManyToOne(type => Decorator, decorator => decorator.orders)
    decorator: Decorator

    @ManyToOne(type => Style, style => style.orders)
    style: Style

    @Column()
    price: number

    @Column({default: new Date()})
    date: Date

    @Column({nullable: true})
    delivery_date: Date

    @Column()
    amount: number

    @Column({nullable: true})
    comment: string


}