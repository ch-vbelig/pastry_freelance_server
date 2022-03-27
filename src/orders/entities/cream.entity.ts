import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./order.entity";

@Entity()
export class Cream{
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    cream_tag: string

    @Column({nullable : true})
    cream_name: string

    @OneToMany(type => Order, order => order.cream)
    orders: Order[]

    constructor(cream_tag) {
        this.cream_tag = cream_tag
    }

}