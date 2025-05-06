import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class AuthTokenGuard implements CanActivate{
    async canActivate(context: ExecutionContext): Promise<boolean> {
        
        const request: Request = context.switchToHttp().getResponse()
        const token = this.extractTokenHeader(request)

        console.log(token)
        return true
        
    }

    extractTokenHeader(request: Request){
        const authorization = request.headers?.authorization

        if(!authorization || typeof authorization !== "string")
            return
        return authorization    
    }
}