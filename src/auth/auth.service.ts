import { Injectable } from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

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

    async generateAccessToken(user: any) {
        console.log("AuthService.generateAccessToken() user:", user)
        const payload = {email: user.email, sub: user.id}
        return this.jwtService.sign(payload)
    }
}
