import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const optionsSwagger = new DocumentBuilder()
    .setTitle('Crystal Hertz')
    .setDescription('The crystal hertz project API documentation')
    .setVersion('0.1.1')
    .build();

  const docSwagger = SwaggerModule.createDocument(app, optionsSwagger);
  SwaggerModule.setup(`api/docs/${'v0'}`, app, docSwagger);

  app.enableCors();

  await app
    .listen(process.env.PORT as string)
    .then(() => Logger.log(`Run on http://localhost:${process.env.PORT}/`));
}
bootstrap();
