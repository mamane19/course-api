import { Logger } from "nestjs-pino";
import { NestFactory } from "@nestjs/core";
import { rateLimit } from "express-rate-limit";
import { AppModule } from "./app.module";
import { configs, options } from "./common/";
import { SwaggerModule } from "@nestjs/swagger";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import { Logger as NestLogger } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
import helmet from "helmet";
import * as mongoose from "mongoose";
import * as Sentry from "@sentry/node";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const configService: ConfigService = app.get(ConfigService);
  // app.useLogger(app.get(Logger));
  if (configService.get<string>("NODE_ENV") === "production") {
    app.useLogger(app.get(Logger));
  }

  /**
   * setting a global prefix for all routes
   * All routes will be prefixed with /api
   * for example: /api/talent/{:_id}
   */
  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);

  // versioning for api on controller level, excluding liveliness controllers
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: "v",
  });

  // cors configuration. You can put the origins in the .env file
  app.enableCors({
    credentials: true,
    origin: ["http://localhost:3000"],
  });

  // enabling shutdown hooks for graceful shutdown of the server
  app.enableShutdownHooks();
  // using global pipes for validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // enable automatic transformation
      whitelist: true, // enable validation whitelist
    })
  );

  // sentry configuration
  // TODO(): add environment and release to sentry, remove sentry notifs from localhost
  Sentry.init({
    dsn: configService.get<string>("SENTRY_DSN"),
    // environment: configService.get<string>('NODE_ENV'),
    // release: configService.get<string>('SENTRY_RELEASE'),
  });

  // using global interceptors for logging and error handling
  // app.useGlobalInterceptors(new SentryInterceptor());
  // using cookie parser for parsing cookies from requests
  app.use(cookieParser(configService.get<string>("COOKIE_SECRET")));
  // using helmet for security headers configuration
  app.use(helmet());
  app.use(helmet.noSniff());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.contentSecurityPolicy());

  // a rate limiter for all requests to the api to prevent DDOS attacks
  if (configService.get<string>("NODE_ENV") === "production") {
    app.use(
      rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
        message: "Oops! Identifying bunch of requests, abi try again later.",
        statusCode: 429,
      })
    );
  }

  // Swagger setup
  const document = SwaggerModule.createDocument(app, configs, options);
  SwaggerModule.setup(`${globalPrefix}/docs`, app, document, {
    explorer: true,
    customSiteTitle: "Courses API Documentation",
  }); // setup swagger

  const port: number = configService.get<number>("PORT");
  await app.listen(port);
  NestLogger.log(
    `🚀 Using ${configService.get<string>("NODE_ENV")} environment...`
  );
  NestLogger.log(`🚀 Application is running on: ${port}/${globalPrefix}`);
  NestLogger.log(`🚀 Swagger is running on: ${port}/${globalPrefix}/docs`);
  if (configService.get<string>("NODE_ENV") === "development") {
    NestLogger.log(`🚀 MongoDB is running on: ${mongoose.connection.host}`);
  }
}

bootstrap();
