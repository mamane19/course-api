import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { LoggerModule } from "nestjs-pino";
import { TerminusModule } from "@nestjs/terminus";
import { AppController } from "./app.controller";
import { MongooseConfigService } from "./shared/";
import { getEnvPath } from "./common/";
import { CoursesModule } from "./domains";

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envFilePath,
    }),

    /**
     * @todo Forward the logs to a centralized logging service. or to a file.
     * @see ...
     * @priority medium
     *
     */
    LoggerModule.forRoot({
      exclude: [{ method: RequestMethod.GET, path: "api/auth/user" }],
    }),
    TerminusModule,
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [
    //   {
    //     provide: APP_GUARD,
    //     useClass: JwtGuard /* A guard that is used to protect routes with JWT */,
    //   },
    //   {
    //     provide: APP_GUARD,
    //     useClass:
    //       RolesGuard /* A guard that is used to protect routes with roles. */,
    //   },
  ],
})
export class AppModule {}
