import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./order.entity";

@Entity()
export class Decorator{
    constructor(decorator_tag) {
        this.decorator_tag = decorator_tag
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    decorator_tag: string

    @Column({nullable : true})
    decorator_name: string

    @OneToMany(type => Order, order => order.decorator)
    orders: Order[]

}