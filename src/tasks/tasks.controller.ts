import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly TasksService : TasksService){}

    @Get()
    findAllTaks(@Query() queryParam: any){
        return this.TasksService.findAll()
    }

    @Get(':id')
    findOneTasks(@Param('id') id: string){
        return this.TasksService.findOne(id)
    }

    @Post()
    createTasks(@Body() body: any){
        console.log(body)
        return "Tarefa cadastrada com sucesso!"
    }
}
