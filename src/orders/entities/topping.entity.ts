import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./order.entity";

@Entity()
export class Topping{
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    topping_tag: string

    @Column({nullable : true})
    topping_name: string

    @OneToMany(type => Order, order => order.topping)
    orders: Order[]

    constructor(topping_tag) {
        this.topping_tag = topping_tag
    }

}