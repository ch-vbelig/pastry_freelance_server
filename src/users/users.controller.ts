import {Body, Controller, Get, Param, Post, Request, UseGuards} from "@nestjs/common";
import {UsersService} from "./users.service";
import {AuthGuard} from "@nestjs/passport";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Post("register")
    async registerUser(@Body() user){
        return this.usersService.saveOne(user)
    }

    @UseGuards(AuthGuard('local'))
    @Post("login")
    async loginUser(@Request() req) {
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