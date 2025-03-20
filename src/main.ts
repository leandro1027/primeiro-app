import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

/*
- app.module.ts : É o móudlo principal do aplicativo
- app.controller.ts : Define as rotas e lida com as requisições
- app.service.ts : Contém a lógica do negócio, separado do controlador

*/

//Metodo que inicia o projeto
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

