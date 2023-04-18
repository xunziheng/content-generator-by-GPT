import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CHATGPT_API_KEY } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('YOUR_API_KEY_HERE', CHATGPT_API_KEY);
  await app.listen(3000);
}
bootstrap();
