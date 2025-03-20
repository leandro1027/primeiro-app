import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    findAll(){
        return[
            {
                id: 1,
                task: "Aprendendo NestJS1"
            },
            {
                id: 2,
                task: "Aprendendo NestJS2"
            }
        ]
    }

    findOne(){
        return "Retornando apenas uma tarefa!"
    }

}
