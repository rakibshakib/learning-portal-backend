import { Schema, model } from "mongoose";
import { AssignmentModel, IAssignement } from "./assignment.interface";

export const assignmentSchema = new Schema<IAssignement>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    video_id: {
      type: Schema.Types.ObjectId,
      ref: "Videos",
      required: true,
    },
    totalMark: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Assignment = model<IAssignement, AssignmentModel>(
  "Assignment",
  assignmentSchema
);
