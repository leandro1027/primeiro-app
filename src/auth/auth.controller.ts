import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

        @Post()
        signIn(@Body() signInDto: signInDto){
            return this.authService.authenticate(signInDto)
        }

   
}
