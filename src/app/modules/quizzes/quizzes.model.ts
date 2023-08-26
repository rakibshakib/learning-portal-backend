import { Schema, model } from "mongoose";
import { IQuizzes, QuizzesModel } from "./quizzes.interface";

export const QuizzesSchema = new Schema<IQuizzes>(
  {
    question: { type: String, required: true, unique: true },
    video_id: {
      type: Schema.Types.ObjectId,
      ref: "Videos",
      required: true,
    },
    options: [
      {
        id: { type: Number, required: true },
        option: { type: String, required: true },
        isCorrect: { type: Boolean, required: true },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Quizzes = model<IQuizzes, QuizzesModel>("Quizzes", QuizzesSchema);
