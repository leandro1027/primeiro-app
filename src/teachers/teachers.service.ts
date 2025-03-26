import { Injectable } from '@nestjs/common';

@Injectable()
export class TeachersService {

    findAll(){
        return[
            {
                id: 1,
                teacher: "Professor 1"
            },
            {
                id: 2,
                teacher: "Professor 2"
            }
        ]
    }

    findOne(){
        return "Retornando apenas um professor!"
    }

}
