import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from 'src/tasks/tasks.module';
import { usersModule } from 'src/users/users.module';


@Module({
  imports: [TasksModule, usersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
