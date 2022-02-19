import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

    @Column()
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
    
}