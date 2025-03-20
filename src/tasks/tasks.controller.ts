import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    FindAllTasks(){
        return('Buscando todas as rotas!')
    }


}
