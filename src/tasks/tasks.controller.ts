import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly TasksService : TasksService){}

    @Get()
    findAllTaks(){
        return this.TasksService.findAll()
    }

    @Get(':id')
    findOneTasks(@Param('id') id: string){
        return this.TasksService.findOne(id)
    }
}
