import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

/*
- app.module.ts : É o móudlo principal do aplicativo
- app.controller.ts : Define as rotas e lida com as requisições
- app.service.ts : Contém a lógica do negócio, separado do controlador

*/

//Metodo que inicia o projeto
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ // Trabalhar com validação global
    whitelist: true //se o usuuário enviar algum parametro inexistente no post!
  })) 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

