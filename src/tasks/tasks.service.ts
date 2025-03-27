import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [
        {
            id: 1,
            name: "NestJS",
            description: "Primeira tarefa",
            completed: false
        },
        {
            id: 2,
            name: "NestJS",
            description: "Segunda tarefa",
            completed: true
        }

    ]

    findAll(){
        return this.tasks
    }

    findOne(id: string){
        const task = this.tasks.find(task => task.id === Number(id))

        if(task) return task
        throw new HttpException("Essa tarefa não existe!", HttpStatus.NOT_FOUND)
    }

    create(CreateTaskDto: CreateTaskDto){
        const newId = this.tasks.length + 1

        const newTasks = {
            id: newId,
            ...CreateTaskDto,
            completed: false
        }

        this.tasks.push(newTasks)
        
        return newTasks
    }

    update(id: string, updateTaskDto: UpdateTaskDto){
        const taskIndex = this.tasks.findIndex(task => task.id === Number(id))

        if(taskIndex < 0)
            throw new HttpException("Essa tarefa não existe!", HttpStatus.NOT_FOUND)
       
            const taskItem = this.tasks[taskIndex]

            this.tasks[taskIndex] = {
                ...taskItem,
                ...updateTaskDto
            }
        
        return "Tarefa atualizada!"

    }

    remove(id: string){
        const taskIndex = this.tasks.findIndex(task => task.id === Number(id))

        if(taskIndex < 0)
            throw new HttpException("Essa tarefa não existe!", HttpStatus.NOT_FOUND)

        this.tasks.splice(taskIndex, 1)

        return "Tarefa deletada!"
    }

}
