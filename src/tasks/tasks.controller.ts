import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly TasksService : TasksService){}

    @Get()
    findAllTasks(@Query("Limit") Limit: string){
        return this.TasksService.findAll()
    }

    @Get(':id')
    findOneTasks(@Param('id', ParseIntPipe) id: number){
        return this.TasksService.findOne(id)
    }

    @Post()
    createTasks(@Body() CreateTaskDto: CreateTaskDto){
        return this.TasksService.create(CreateTaskDto)
    }

    @Patch(':id')
    updateTasks(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto){
        return this.TasksService.update(id, updateTaskDto)

    }

    @Delete(':id')
    removeTasks(@Param('id') id: number){
        return this.TasksService.remove(id)

    }
}

