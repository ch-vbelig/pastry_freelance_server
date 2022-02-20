import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./order.entity";

@Entity()
export class Style{
    constructor(style_tag) {
        this.style_tag = style_tag

    }

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    style_tag: string

    @Column({nullable : true})
    style_name: string

    @OneToMany(type => Order, order => order.style)
    orders: Order[]

}