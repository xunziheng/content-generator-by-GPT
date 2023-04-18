import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGPTModule } from './chatgpt/chatgpt.module';

@Module({
  imports: [ChatGPTModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
