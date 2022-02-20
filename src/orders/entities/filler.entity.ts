import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./order.entity";

@Entity()
export class Filler{
    constructor(filler_tag) {
        this.filler_tag = filler_tag
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    filler_tag: string

    @Column({nullable : true})
    filler_name: string

    @OneToMany(type => Order, order => order.filler)
    orders: Order[]
}