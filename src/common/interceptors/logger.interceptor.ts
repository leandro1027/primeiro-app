import { CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LoggerInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {

        const request = context.switchToHttp().getRequest()
        const method = request.method
        const url = request.url
        const now = Date.now()

        console.log(request['user'])
        console.log(`[REQUEST] ${method} ${url} - início da req`)
        return next.handle().pipe(
            tap(() => {
                console.log(`[RESPONSE] ${method} ${url} - ${Date.now() -now}ms`)
            }

            )
        )
    }
}