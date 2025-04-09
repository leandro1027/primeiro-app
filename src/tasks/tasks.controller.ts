import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly TasksService : TasksService){}

    @Get()
    findAllTasks(@Query() paginationDto: PaginationDto){
        return this.TasksService.findAll(paginationDto)
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
    updateTasks(@Param('id', ParseIntPipe) id: number, @Body() updateTaskDto: UpdateTaskDto){
        return this.TasksService.update(id, updateTaskDto)

    }

    @Delete(':id')
    removeTasks(@Param('id', ParseIntPipe) id: number){
        return this.TasksService.delete(id)

    }
}

