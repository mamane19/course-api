import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import {
  HealthCheck,
  HealthCheckService,
  MongooseHealthIndicator,
  HealthCheckResult,
} from "@nestjs/terminus";
// import {
//   RedisHealthIndicator,
//   DEFAULT_REDIS_CLIENT,
// } from '@liaoliaots/nestjs-redis';

@ApiTags("health")
@Controller()
export class AppController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly mongoose: MongooseHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  check() {
    const status = this.health.check([
      async () => this.mongoose.pingCheck("mongoose"),
    ]);
    // we want to return a json with status and if oour server is alive or not.
    return status;
  }

  @Get()
  getHello() {
    return "Hello World!";
  }
}
