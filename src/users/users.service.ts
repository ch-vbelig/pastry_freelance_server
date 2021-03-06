import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {
    }

    async saveOne(user: User): Promise<User> {
        return this.usersRepository.save(user)
    }

    async findByEmail(email: string): Promise<User> {
        const userCredentials = await this.usersRepository.findOne(
            {email: email},
            {select: ["id", "email", "password"]}
        )
        console.log("Class: UserService\nMethod: findByEmail()\nMessage: ", userCredentials, "\n")
        return userCredentials
    }

    async findById(user_id): Promise<User> {
        const user = await this.usersRepository.findOne(user_id, {
            relations: ["created_orders", "created_orders.type", "created_orders.form", "created_orders.body", "created_orders.topping", "created_orders.cream",
                "responded_orders", "responded_orders.type", "responded_orders.form", "responded_orders.body", "responded_orders.topping", "responded_orders.cream",
            ],
        })
        console.log("Class: UserService\nMethod: findByID()\nMessage:", user, "\n")
        return user
    }

}

// const user = await this.usersRepository.findOne(user_id, {
//     select: ["id", "firstname", "lastname", "email", "city", "street", "house_num", "flat_num", "telegram_username"]
// })
// findAll(): Promise<User[]> {
//     return this.usersRepository.find();
// }
//
//
// async remove(id: string): Promise<void> {
//     await this.usersRepository.delete(id)
// }
