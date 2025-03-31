import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { guest } from './entities/guest.entity';
import { CreateGuestDto } from './dto/create-guest.dto';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';

@Injectable()
export class GuestsService {

    private guests: guest[] = [
        {
            id: 1,
            name: "Leandro",
            cpf: "11111111 tarefa",
            adress: "Endereço aleatório"
        }
    ]

    findAll(){
        return this.guests
    }

    findOne(id: string){
        const guest = this.guests.find(guest => guest.id === Number(id))

        if(guest) return guest
    throw new HttpException("Esse convidado não existe!", HttpStatus.NOT_FOUND)
    }

    create(CreateGuestDto: CreateGuestDto){
        const newId = this.guests.length + 1

        const newGuests = {
            id: newId,
            ...CreateGuestDto,
        
        }

        this.guests.push(newGuests)

        return newGuests
    }

    update(id: string, UpdateGuestDto: UpdateGuestDto){
        const guestIndex = this.guests.findIndex(guest => guest.id === Number(id))

        if(guestIndex < 0)
            throw new HttpException("Esse convidado não existe!", HttpStatus.NOT_FOUND)

        const guestItem = this.guests[guestIndex]

        this.guests[guestIndex] = {
            ...guestItem,
            ...UpdateGuestDto
        }

        return "Convidado atualizado!"
    }


    remove(id: string){
        const guestIndex = this.guests.findIndex(guest => guest.id === Number(id))

        if (guestIndex < 0)
            throw new HttpException("Esse convidado não existe!", HttpStatus.NOT_FOUND)

        this. guests.splice(guestIndex, 1)

        return "Convidado deletado!"
    }
}
