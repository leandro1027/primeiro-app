import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { useContainer } from 'class-validator';


@Injectable()
export class UsersService {
    constructor(private readonly prismaService : PrismaService){}

 async findAll(paginationDto: PaginationDto){
        const {limit = 10, offset = 0 } = paginationDto

        const allusers = await this.prismaService.user.findMany({
            take: limit,
            skip: offset,
            orderBy: {
                created: 'desc'
            }
        })
        return allusers
    }

   async findOne(id: number){
        const user = await this.prismaService.user.findFirst({
            where: {
                id:id
            },
            select: {
                id: true,
                name: true,
                email: true,
                active: true,
                task: true
            }
        })

        if(user?.name) return user
        throw new HttpException("Esse usuário não existe!", HttpStatus.NOT_FOUND)
    }

   async create(CreateuserDto: CreateUserDto){
    try{
        const newusers = this.prismaService.user.create({
            data:{
                name: CreateuserDto.name,
                adress: CreateuserDto.adress,
                email: CreateuserDto.email,
                passwordHash: CreateuserDto.password,
                active: false
            },
            select:{
                id: true,
                name: true,
                email: true,
                active: true
            }
        })
        return newusers
    }catch(e){
        throw new HttpException("Não possivel cadastrar o usuário!", HttpStatus.BAD_REQUEST)
    }
   }

   async update(id: number, updateuserDto: UpdateUserDto){
       try{
        const user = await this.prismaService.user.findFirst({
            where: {
                id: id
            }
        })
        
        if(!user)
            throw new HttpException("Esse usuário não existe!", HttpStatus.NOT_FOUND)

        const updateUser = await  this.prismaService.user.update({
            where: {
                id: user.id
            },
            data: {
                name: updateuserDto.name ? updateuserDto.name : user.name,
                passwordHash: updateuserDto.password ? updateuserDto.password : user.passwordHash,
            },
            select:{
                id:true,
                name: true,
                email: true
            }

        })
        return updateUser
       } catch(e){
        throw new HttpException("Não foi possivel atualizar o usuário!", HttpStatus.BAD_REQUEST)
       }

    }

   async delete(id: number){
        try{
            const user = await this.prismaService.user.findFirst({
                where: {
                    id: id
                }
            })

            if(!user)
                throw new HttpException("Esse usuário não existe!", HttpStatus.NOT_FOUND)

                await this.prismaService.user.delete({
                    where:{
                        id: user.id
                    }
                })

                return "usuário excluido com sucesso!"
            }catch(e){
                throw new HttpException("Não possivel deletar o usuário!", HttpStatus.BAD_REQUEST)
            }
        }

}
