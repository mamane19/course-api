import { Injectable, Inject, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  private logger = new Logger(MongooseConfigService.name);
  @Inject(ConfigService) private readonly configService: ConfigService;

  /**
   * It returns a MongooseModuleOptions object that contains the URI of the MongoDB database
   * @returns A MongooseModuleOptions object.
   */
  createMongooseOptions(): MongooseModuleOptions {
    // if the database is not set, we throw an error to prevent the application from starting
    if (!this.configService.get<string>('MONGO_URI')) {
      throw new Error('MONGODB_URI is not set');
    }
    return {
      uri: `${this.configService.get('MONGO_URI')}`,
    };
  }
  //   GpFJMnWfiT6PazLj
}
