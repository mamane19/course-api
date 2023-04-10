import * as mongoose from "mongoose";

export interface ICourse {
  _id: string;
  name: string;
  description: string;
  applicationDeadline: Date;
  tuitionCost: number;
  availableFunding: number;
}

export const CourseSchema = new mongoose.Schema<ICourse>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: false,
    },
    applicationDeadline: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    tuitionCost: {
      type: Number,
      required: true,
      unique: false,
    },
    availableFunding: {
      type: Number,
      required: true,
      unique: false,
    },
  },
  { timestamps: true }
);

// adding an index to the schema on name
CourseSchema.index({ name: 1 });

export const orderModel = mongoose.model<ICourse>("courses", CourseSchema);
