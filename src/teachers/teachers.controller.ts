import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teachers')
export class TeachersController {
    constructor(private readonly teachersService: TeachersService) {}

    @Get()
    findAllTeachers(@Query() queryParam: any) {
        return this.teachersService.findAll();
    }

    @Get(':id')
    findOneTeacher(@Param('id', ParseIntPipe) id: string) {
        return this.teachersService.findOne(id);
    }

    @Post()
    createTeacher(@Body() createTeacherDto: CreateTeacherDto) {
        return this.teachersService.create(createTeacherDto);
    }

    @Patch(':id')
    updateTeacher(@Param('id', ParseIntPipe) id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
        return this.teachersService.update(id, updateTeacherDto);
    }

    @Delete(':id')
    removeTeacher(@Param('id', ParseIntPipe) id: string) {
        return this.teachersService.remove(id);
    }
}
