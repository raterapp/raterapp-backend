import { INestApplication, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

function setupValidationPipe(app: INestApplication) {
  app.useGlobalPipes(new ValidationPipe())
}

function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Rater app API')
    .setDescription('API for rater app')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  setupValidationPipe(app)
  setupSwagger(app)

  await app.listen(3000)
}
bootstrap()
