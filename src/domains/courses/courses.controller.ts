import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Patch,
  Query,
} from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CoursesService } from "./courses.service";
import { ICourse } from "./models/courses.model";
import { CreateCourseDto } from "./dto";

@ApiTags("courses")
@Controller({
  path: "courses",
  version: "1",
})
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post("new")
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: "Create a new course",
    // description: 'Create a new course',
  })
  public create(@Body() dto: CreateCourseDto): Promise<ICourse> {
    return this.coursesService.create(dto);
  }
  @Get("search")
  @ApiOperation({
    summary: "Search for a course by name",
    // description: 'Search for a course by name',
  })
  public search(@Query("name") name: string): Promise<object> {
    return this.coursesService.search(name);
  }

  @Get()
  @ApiOperation({
    summary: "Get all courses",
    // description: 'Get all courses',
  })
  public getAll(): Promise<ICourse[]> {
    return this.coursesService.getAll();
  }

  @Get(":id")
  @ApiOperation({
    summary: "Get a course by id",
    // description: 'Get a course by id',
  })
  public getById(@Param("id") id: string): Promise<ICourse> {
    return this.coursesService.getById(id);
  }

  @Patch(":id")
  @ApiOperation({
    summary: "Update a course by id",
    // description: 'Update a course by id',
  })
  public update(
    @Param("id") id: string,
    @Body() course: ICourse
  ): Promise<ICourse> {
    return this.coursesService.update(id, course);
  }
}
