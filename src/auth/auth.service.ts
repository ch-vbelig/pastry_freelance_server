import { Injectable } from '@nestjs/common';
import {UsersService} from "../users/users.service";

@Injectable()
export class AuthService {

    constructor(private readonly usersService: UsersService) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(email)

        if (user && user.password == pass) {
            const result = {
                id: user.id,
                email: user.email
            }
            return result
        }

        return null
    }
}
