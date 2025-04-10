import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { register } from 'module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class TeachersService {
    constructor(private readonly prismaService: PrismaService){}
  
    async findAll(paginationDto: PaginationDto){
            const {limit = 10, offset = 0 } = paginationDto
    
            const allTeachers = await this.prismaService.teacher.findMany({
                take: limit,
                skip: offset,
                orderBy: {
                    created: 'desc'
                }
            })
            return allTeachers
        }
    
       async findOne(id: number){
            const teacher = await this.prismaService.teacher.findFirst({
                where: {
                    id:id
                }
            })
    
            if(teacher?.name) return teacher
            throw new HttpException("Essa professor não existe!", HttpStatus.NOT_FOUND)
        }
    
       async create(createteacherDto: CreateTeacherDto){
        try{
            const newTeachers = this.prismaService.teacher.create({
                data:{
                    name: createteacherDto.name,
                    wage: createteacherDto.wage,
                    register: createteacherDto.register,
                    concurred: false 
                }
            })
            return newTeachers
        }catch(e){
            throw new HttpException("Não possivel cadastrar o professor!", HttpStatus.BAD_REQUEST)
        }
       }
    
       async update(id: number, updateTeacherDto: UpdateTeacherDto){
           try{
            const findteacher = await this.prismaService.teacher.findFirst({
                where: {
                    id: id
                }
            })
            
            if(!findteacher)
                throw new HttpException("Essa professor não existe!", HttpStatus.NOT_FOUND)
    
            const teacher = await  this.prismaService.teacher.update({
                where: {
                    id: findteacher.id
                },
                data: updateTeacherDto
            })
            return teacher
           } catch(e){
            throw new HttpException("Não foi possivel atualizar o professor!", HttpStatus.BAD_REQUEST)
           }
    
        }
    
       async delete(id: number){
            try{
                const findteacher = await this.prismaService.teacher.findFirst({
                    where: {
                        id: id
                    }
                })
    
                if(!findteacher)
                    throw new HttpException("Esse professor não existe!", HttpStatus.NOT_FOUND)
    
                    await this.prismaService.teacher.delete({
                        where:{
                            id: findteacher.id
                        }
                    })
    
                    return "professor excluida com sucesso!"
                }catch(e){
                    throw new HttpException("Não possivel deletar o professor!", HttpStatus.BAD_REQUEST)
                }
            }
    
    }
    