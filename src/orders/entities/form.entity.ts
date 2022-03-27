import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./order.entity";

@Entity()
export class Form{
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    form_tag: string

    @Column({nullable : true})
    form_name: string

    @OneToMany(type => Order, order => order.form)
    orders: Order[]

    constructor(form_tag) {
        this.form_tag = form_tag
    }

}