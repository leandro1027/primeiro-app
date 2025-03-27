import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

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
        return this.tasks.find(task => task.id === Number(id))
    }

    create(body: any){
        const newId = this.tasks.length + 1

        const newTasks = {
            id: newId,
            ...body
        }

        this.tasks.push(newTasks)
        
        return newTasks
    }

    update(id: string, body: any){
        const taskIndex = this.tasks.findIndex(task => task.id === Number(id))

        if(taskIndex >= 0){
            const taskItem = this.tasks[taskIndex]

            this.tasks[taskIndex] = {
                ...taskItem,
                ...body
            }
        }

    }

    remove(id: string){
        return "Deletando o id: " + id
    }

}
