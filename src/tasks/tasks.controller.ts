import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';

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
    createTasks(@Body() CreateTaskDto: CreateTaskDto){
        return this.TasksService.create(CreateTaskDto)
    }

    @Patch(':id')
    updateTaks(@Param('id') id: string, @Body() updateTaskDto: updateTaskDto){
        return this.TasksService.update(id, CreateTaskDto)

    }

    @Delete(':id')
    removeTasks(@Param('id') id: string){
        return this.TasksService.remove(id)

    }
}

