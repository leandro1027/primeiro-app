import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

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

}
