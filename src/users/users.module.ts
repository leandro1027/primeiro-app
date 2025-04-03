import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";


@Module({
    imports: [UsersController],
    controllers: [UsersController],
    providers: [UsersService],
})
export class usersModule{}