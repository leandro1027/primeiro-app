import { Controller, Get } from '@nestjs/common';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TasksController {
    constructor(private readonly TeachersService : TeachersService){}

    @Get()
    findAllTeachers(){
        return this.TeachersService.findAll()
    }

    @Get('1')
    findOneTeachers(){
        return this.TeachersService.findOne()
    }
}
