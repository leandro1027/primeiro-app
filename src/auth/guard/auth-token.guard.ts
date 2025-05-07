import { CanActivate, ExecutionContext, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import jwtConfig from "../config/jwt.config";
import { ConfigType } from "@nestjs/config";

@Injectable()
export class AuthTokenGuard implements CanActivate{

    constructor(
        private readonly jwtService: JwtService,

        @Inject(jwtConfig.KEY)
        private readonly jwtConfiguration: ConfigType<typeof jwtConfig>
    ){}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        
        const request: Request = context.switchToHttp().getResponse()
        const token = this.extractTokenHeader(request)

        if(!token)
            throw new HttpException("Token não encontrado!", HttpStatus.UNAUTHORIZED)

        try{
            const payload = await this.jwtService.verifyAsync(token, this.jwtConfiguration)
            
            request['user'] = payload
        }catch(error){
            throw new HttpException("Acesso não autorizado!", HttpStatus.UNAUTHORIZED)
        }


        return true
        
    }

    extractTokenHeader(request: Request){
        const authorization = request.headers?.authorization

        if(!authorization || typeof authorization !== "string")
            return
        return authorization.split('')[1]  
    }
}