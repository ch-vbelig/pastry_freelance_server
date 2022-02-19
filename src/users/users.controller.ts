import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    registerUser(@Body() user){
        return this.usersService.saveOne(user)
    }

    @Get()
    findAll(){
        return this.usersService.findAll()
    }

    @Get(":id")
    findUser(@Param() user_id){
        return this.usersService.findOne(user_id)
    }

}