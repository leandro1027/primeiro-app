import { Injectable } from '@nestjs/common';
import { signInDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
    
    async authenticate(signInDto: signInDto){
        console.log(signInDto)
        return true
    }
}
