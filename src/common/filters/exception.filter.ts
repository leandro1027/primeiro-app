import {  ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import {  Request, Response } from "express";
import path from "path";
import { timestamp } from "rxjs";

@Catch(HttpException)
export class ApiExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {

        const context = host.switchToHttp()
        const response = context.getResponse<Response>()
        const request = context.getRequest<Request>()
        const status = exception.getStatus()
        const errorResponse = exception.getResponse()

        console.log("[FILTER]...")

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: errorResponse !== "" ?errorResponse : "Mensagem padrão para o erro vazio!"
        })
        
    }
}
