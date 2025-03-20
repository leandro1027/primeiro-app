import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly TasksService : TasksService){}

    @Get()
    findAllTaks(){
        return this.TasksService.findAll()
    }

    @Get('1')
    findOneTasks(){
        return this.TasksService.findOne()
    }
}
