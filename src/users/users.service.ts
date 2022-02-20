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

    async findByEmail(email: string): Promise<User>{
        const userCredentials = await this.usersRepository.findOne(
            {email: email},
            {select: ["id", "email", "password"]}
        )
        console.log("UserService.findByEmail()", userCredentials)
        return userCredentials
    }

    async findById(user_id): Promise<User> {
        const user = await this.usersRepository.findOne(user_id, {
            select: ["id", "firstname", "lastname", "email", "city", "street", "house_num", "flat_num", "telegram_username"]
        })
        console.log("UserService.findByID()", user)
        return user
    }

    // findAll(): Promise<User[]> {
    //     return this.usersRepository.find();
    // }
    //
    //
    // async remove(id: string): Promise<void> {
    //     await this.usersRepository.delete(id)
    // }
}
