import { Schema, model } from "mongoose";
import { IQuizMarks, QuizeMarkModel } from "./quizMark.interface";

export const quizMarkSchema = new Schema<IQuizMarks>(
  {
    student_id: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    video_id: {
      type: Schema.Types.ObjectId,
      ref: "Videos",
      required: true,
    },
    totalQuiz: {
      type: Number,
      required: true,
    },
    totalCorrect: {
      type: Number,
      required: true,
    },
    totalWrong: {
      type: Number,
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const QuizMark = model<IQuizMarks, QuizeMarkModel>(
  "QuizMark",
  quizMarkSchema
);
