import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
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
        return this.TasksService.create(body)
    }

    @Patch(':id')
    updateTaks(@Param('id') id: string, @Body() body: any){

    }
}

