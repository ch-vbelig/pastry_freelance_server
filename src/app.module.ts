import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./users/users.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./users/user.entity";
import { AuthModule } from './auth/auth.module';
import {Order} from "./orders/entities/order.entity";
import {Type} from "./orders/entities/type.entity";
import {Filler} from "./orders/entities/filler.entity";
import {Decorator} from "./orders/entities/decorator.entity";
import {Style} from "./orders/entities/style.entity";
import {OrdersModule} from "./orders/orders.module";

@Module({
  imports: [UsersModule, AuthModule, OrdersModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test3152",
    database: "bakecake",
    entities: [User, Order, Type, Filler, Decorator, Style],
    synchronize: true,

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
