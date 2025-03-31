import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { guest } from './entities/guest.entity';

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

    remove(id: string){
        const guestIndex = this.guests.findIndex(guest => guest.id === Number(id))

        if (guestIndex < 0)
            throw new HttpException("Esse convidado não existe!", HttpStatus.NOT_FOUND)

        this. guests.splice(guestIndex, 1)

        return "Convidado deletado!"
    }
}
