import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./order.entity";

@Entity()
export class Type{
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    type_tag: string

    @Column({nullable : true})
    type_name: string

    @OneToMany(type => Order, order => order.type)
    orders: Order[]

    constructor(type_tag) {
        this.type_tag = type_tag
    }

}