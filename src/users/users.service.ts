import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {

    private users: User[] = [
        {
            id: 1,
            name: "NestJS",
            adress: "teste",
            email: "leandro@gmail.com"
           
        },
        {
            id: 2,
            name: "NestJS",
            adress: "teste",
            email: "leandro@gmail.com"
            
        }

    ]

    findAll(){
        return this.users
    }

    findOne(id: number){
        const user = this.users.find(user => user.id === id)

        if(user) return user
        throw new HttpException("Esse usuário não existe!", HttpStatus.NOT_FOUND)
    }

    create(createUserDto: CreateUserDto){
        const newId = this.users.length + 1

        const newUser = {
            id: newId,
            ...createUserDto
        }

        this.users.push(newUser)
        
        return newUser
    }

    update(id: number, updateUserDto: UpdateUserDto){
        const userIndex = this.users.findIndex(user => user.id === id)

        if(userIndex < 0)
            throw new HttpException("Esse Usuário não existe!", HttpStatus.NOT_FOUND)
       
            const userItem = this.users[userIndex]

            this.users[userIndex] = {
                ...userItem,
                ...updateUserDto
            }
        
        return "Usuário atualizado!"

    }

    remove(id: number){
        const userIndex = this.users.findIndex(user => user.id === id)

        if(userIndex < 0)
            throw new HttpException("Esse usuário não existe!", HttpStatus.NOT_FOUND)

        this.users.splice(userIndex, 1)

        return "Usuário deletado!"
    }

}
