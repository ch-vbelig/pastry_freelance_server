import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {type} from "os";
import {Order} from "../orders/entities/order.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    email: string

    @Column({select: false})
    password: string

    @Column()
    city: string

    @Column()
    street: string

    @Column()
    house_num: string

    @Column({nullable: true})
    flat_num: number

    @Column({nullable: true})
    telegram_username: string

    @OneToMany(type => Order, order => order.user)
    created_orders: Order[]

    @OneToMany(type=> Order, order => order.baker, {nullable: true})
    responded_orders: Order[]

    
}