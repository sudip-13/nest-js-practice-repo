import { NestFactory,HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const {httpAdapter}= app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors();
  app.setGlobalPrefix('api')
  await app.listen(4000);
  console.log('Server is running on http://localhost:4000');
}
bootstrap();
