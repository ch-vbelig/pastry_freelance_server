import {Body, Controller, Get, Param, Post, Request, UseGuards} from "@nestjs/common";
import {UsersService} from "./users.service";
import {LocalAuthGuard} from "../auth/local-auth.guard";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {AuthService} from "../auth/auth.service";

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService,
    ) {}

    @Post("register")
    async registerUser(@Body() user){
        return this.usersService.saveOne(user)
    }

    @UseGuards(LocalAuthGuard)
    @Post("login")
    async loginUser(@Request() req) {
        console.log(req)
        // return access_token
        return req.user.access_token
    }

    @UseGuards(JwtAuthGuard)
    @Post('profile')
    async getProfile(@Request() req){
        return this.usersService.findById(req.user.id)
    }

    // @Get(":id")
    // findUser(@Param() user_id){
    //     return this.usersService.findOne(user_id)
    // }
    //
    // @Get()
    // findAll(){
    //     return this.usersService.findAll()
    // }


}