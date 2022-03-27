import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./order.entity";

@Entity()
export class Body{
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    body_tag: string

    @Column({nullable : true})
    body_name: string

    @OneToMany(type => Order, order => order.body)
    orders: Order[]

    constructor(body_tag) {
        this.body_tag = body_tag
    }

}