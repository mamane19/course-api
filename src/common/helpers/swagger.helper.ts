import { DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

// Swagger setup
export const configs = new DocumentBuilder()
  .setTitle('Muralex API')
  .setDescription('Restful API for the Muralex backend')
  .setVersion('1.0')
  .addSecurity('basic', {
    type: 'http',
    scheme: 'basic',
  })
  .addSecurity('bearer', {
    type: 'apiKey',
    name: 'Authorization',
    in: 'header',
  })
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
    'access-token',
  )
  .addServer('http://localhost:3000/', 'local')
  .build();

export const options: SwaggerDocumentOptions = {
  operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
};
