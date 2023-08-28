import { Model, Types } from "mongoose";
import { userInterface } from "../users/user.interface";
import { IVideo } from "../videos/video.interface";

// http://localhost:9000/quizMark
const playQuiz = {
  id: 1693055408041,
  student_id: 3,
  student_name: "Akash Ahmed",
  video_id: 1690990637544,
  video_title:
    "Javascript Behind The Scene Intro & Javascript Engine Details in Bangla",
  totalQuiz: 2,
  totalCorrect: 2,
  totalWrong: 0,
  totalMark: 10,
  mark: 10,
};
const res = {
  id: 1693055408041,
  student_id: 3,
  student_name: "Akash Ahmed",
  video_id: 1690990637544,
  video_title:
    "Javascript Behind The Scene Intro & Javascript Engine Details in Bangla",
  totalQuiz: 2,
  totalCorrect: 2,
  totalWrong: 0,
  totalMark: 10,
  mark: 10,
};
export type IQuizMarks = {
  student_id: Types.ObjectId | userInterface;
  video_id: Types.ObjectId | IVideo;
  totalQuiz: number;
  totalCorrect: number;
  totalWrong: number;
  totalMark: number;
  mark: number;
};
export type IQuizMarksResponse = {
  student_name: string;
  video_title: string;
  student_id: string;
  video_id: string;
  totalQuiz: number;
  totalCorrect: number;
  totalWrong: number;
  totalMark: number;
  mark: number;
};
export type QuizeMarkModel = Model<IQuizMarks, Record<string, unknown>>;
