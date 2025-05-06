import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post()
    signIn(){
        return "Logado com sucesso"
    }
}
