import { Module } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CoursesController } from "./courses.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { CourseSchema } from "./models/courses.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Courses",
        schema: CourseSchema,
      },
    ]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
