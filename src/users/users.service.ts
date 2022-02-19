import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) { }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(user_id): Promise<User>{
        return this.usersRepository.findOne(user_id)
    }

    saveOne(user: User){
        return this.usersRepository.save(user)
    }

    async remove(id:string): Promise<void> {
        await this.usersRepository.delete(id)
    }

    helloWorld() {
        return "Hello, World!"
    }


}