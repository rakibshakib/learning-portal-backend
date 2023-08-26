import { Schema, model } from "mongoose";
import { AssignmentMarksModel, IAssignmentMarks } from "./asMarks.interface";

export const assignmarksSchema = new Schema<IAssignmentMarks>(
  {
    student_id: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    student_name: {
      type: String,
      required: false,
    },
    assignment_id: {
      type: Schema.Types.ObjectId,
      ref: "Assignment",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    totalMark: {
      type: Number,
      required: true,
    },
    mark: {
      type: Number,
      required: true,
    },
    assingMarks: {
      type: String,
      required: false,
    },
    repo_link: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "published"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const AssignmentMarks = model<IAssignmentMarks, AssignmentMarksModel>(
  "AssignmentMarks",
  assignmarksSchema
);
