import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { signInDto } from './dto/signin.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashingServiceProtocol } from './hash/hashing.service';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private readonly hashingService: HashingServiceProtocol
    ){}
    
    async authenticate(signInDto: signInDto){
        const user = await this.prisma.user.findFirst({
            where: {
                email: signInDto.email
            }
        })

        if(!user)
            throw new HttpException("Não foi possivel fazer o login!", HttpStatus.UNAUTHORIZED)
    

        const passwordIsValid = await this.hashingService.compare(signInDto.password, user.passwordHash)

        if(!passwordIsValid)
            throw new HttpException("Não foi possivel fazer o login!", HttpStatus.UNAUTHORIZED)
        
        return{
            id: user.id,
            name: user.name,
            email: user.email
        }
    }
    
}
