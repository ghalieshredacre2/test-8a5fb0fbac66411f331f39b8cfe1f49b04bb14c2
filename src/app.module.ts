import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { App1Controller } from './app1.controller';

@Module({
  imports: [],
  controllers: [App1Controller, AppController],
  providers: [AppService],
})
export class AppModule {}
