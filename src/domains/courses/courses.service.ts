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
}
