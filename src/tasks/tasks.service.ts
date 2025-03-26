import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {

    private tasks: Task[] = [
        {
            id: 1,
            name: "NestJS",
            description: "Primeira tarefa",
            completed: true
        }

    ]


    findAll(){
        return[
            {
                id: 1,
                name: "Aprendendo NestJS1"
            },
            {
                id: 2,
                name: "Aprendendo NestJS2"
            }
        ]
    }

    findOne(id: string){
        return "Tarefa de id: " + id
    }

    create(body: any){
        return body
    }

    update(id: string, body: any){
        return "Atualizando o id: " + id

    }

    remove(id: string){
        return "Deletando o id: " + id
    }

}
