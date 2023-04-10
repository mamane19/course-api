import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ICourse } from "./models/courses.model";
import { CreateCourseDto } from "./dto";

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel("Courses")
    private readonly courseModel: Model<ICourse>
  ) {}

  /**
   * Gets all courses from the database
   * @returns A promise that resolves to an array of order objects found
   *
   */
  public async getAll(): Promise<ICourse[]> {
    return await this.courseModel.find().exec();
  }

  public async getById(id: string): Promise<ICourse> {
    const course = await this.courseModel.findById(id).exec();
    if (!course) {
      throw new NotFoundException("Course not found");
    }
    return course;
  }

  public async create(dto: CreateCourseDto): Promise<ICourse> {
    const newCourse = new this.courseModel(dto);
    return await newCourse.save();
  }

  public async update(id: string, course: ICourse): Promise<ICourse> {
    const updatedCourse = await this.courseModel.findByIdAndUpdate(id, course, {
      new: true,
    });
    if (!updatedCourse) {
      throw new NotFoundException("Course not found");
    }
    return updatedCourse;
  }

  public async delete(id: string): Promise<ICourse> {
    const deletedCourse = await this.courseModel.findByIdAndDelete(id);
    if (!deletedCourse) {
      throw new NotFoundException("Course not found");
    }
    return deletedCourse;
  }

  // search based on name and return the course application deadline
  public async search(name: string): Promise<object> {
    // we ignore the the case sensitivity of the search
    const regex = new RegExp(name, "i");
    const course = await this.courseModel.find({ name: regex }).exec();
    // const course = await this.courseModel.find({ name: name }).exec();
    if (!course) {
      throw new NotFoundException("Course not found");
    }

    // if we have more than one course with the same name, we return each course with its deadline
    if (course.length > 1) {
      const courseWithDeadline = course.map((course) => {
        return {
          name: course.name,
          applicationDeadline: course.applicationDeadline,
          tuitionCost: course.tuitionCost,
          availableFunding: course.availableFunding,
        };
      });
      return courseWithDeadline;
    }
  }
}
