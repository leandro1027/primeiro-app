import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService} from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAllTeachers(@Query() queryParam: any) {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOneTeacher(@Param('id') id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    createTeacher(@Body() createTeacherDto: CreateUserDto) {
        return this.usersService.create(createTeacherDto);
    }

    @Patch(':id')
    updateTeacher(@Param('id') id: number, @Body() updateTeacherDto: UpdateUserDto) {
        return this.usersService.update(id, updateTeacherDto);
    }

    @Delete(':id')
    removeTeacher(@Param('id') id: number) {
        return this.usersService.remove(id);
    }
}
