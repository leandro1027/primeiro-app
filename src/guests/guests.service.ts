import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { guest } from './entities/guest.entity';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class GuestsService {
    constructor(private readonly prismaService: PrismaService){}

    private guests: guest[] = [
        {
            id: 1,
            name: "Leandro",
            cpf: "11111111",
            adress: "Endereço aleatório",
            presence: false

        }
    ]

   async findAll(paginationDto: PaginationDto){
    const {limit = 10, offset = 0 } = paginationDto

    const allGuests = await this.prismaService.guest.findMany({
        take: limit,
        skip: offset,
        orderBy: {
            created: 'desc'
        }
    })
    return allGuests
    }

    async findOne(id: number){
        const guest = await this.prismaService.guest.findFirst({
            where: {
                id:id
            }
        })

    if(guest?.name) return guest
    throw new HttpException("Essa tarefa não existe!", HttpStatus.NOT_FOUND)
    }

    async create(CreateGuestDto: CreateGuestDto){
        try{
        const newGuests = this.prismaService.guest.create({
            data: {
                name: CreateGuestDto.name,
                cpf: CreateGuestDto.cpf,
                adress: CreateGuestDto.adress,
                presence: false
            }
        })
        return newGuests
    }catch(e){
        throw new HttpException("Não possivel cadastrar o convidado!", HttpStatus.BAD_REQUEST)
    }
}


    async update(id: number, UpdateGuestDto: UpdateGuestDto){
        try{
            const findGuest = await this.prismaService.guest.findFirst({
                where: {
                    id: id
                }
            })
            
            if(!findGuest)
                throw new HttpException("Esse convidado não existe!", HttpStatus.NOT_FOUND)
    
            const guest = await  this.prismaService.guest.update({
                where: {
                    id: findGuest.id
                },
                data: UpdateGuestDto
            })
            return guest
           } catch(e){
            throw new HttpException("Não foi possivel atualizar a tarefa!", HttpStatus.BAD_REQUEST)
           }
    
    }

    async delete(id: number){
        try{
            const findguest = await this.prismaService.guest.findFirst({
                where: {
                    id: id
                }
            })

            if(!findguest)
                throw new HttpException("Esse convidado não existe!", HttpStatus.NOT_FOUND)

                await this.prismaService.guest.delete({
                    where:{
                        id: findguest.id
                    }
                })

                return "convidado excluido com sucesso!"
            }catch(e){
                throw new HttpException("Não possivel deletar a tarefa!", HttpStatus.BAD_REQUEST)
            }
        }
}
