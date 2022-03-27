import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./users/users.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';
import {OrdersModule} from "./orders/orders.module";

@Module({
  imports: [UsersModule, AuthModule, OrdersModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test3152",
    database: "bakecake",
    // entities: [User, Order, Type, Filler, Decorator, Style],
    autoLoadEntities: true,
    synchronize: true,

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
