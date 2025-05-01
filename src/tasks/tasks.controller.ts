import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { LoggerInterceptor } from 'src/common/interceptors/logger.interceptor';
import { BodyCreateTaskInterceptor } from 'src/common/interceptors/body-create-task.interceptor';
import { AddHeaderInterceptor } from 'src/common/interceptors/add-header.interceptor';
import { AuthAdminGuard } from 'src/common/guards/admin.guard';

@Controller('tasks')
@UseInterceptors(LoggerInterceptor)
@UseGuards(AuthAdminGuard)
export class TasksController {
    constructor(private readonly TasksService : TasksService){}

    @Get()
    @UseInterceptors(AddHeaderInterceptor)
    findAllTasks(@Query() paginationDto: PaginationDto){
        console.log("Todas as tarefas!")
        return this.TasksService.findAll(paginationDto)
    }

    @Get(':id')
    findOneTasks(@Param('id', ParseIntPipe) id: number){
        return this.TasksService.findOne(id)
    }

    @Post()
    @UseInterceptors(BodyCreateTaskInterceptor)
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

