import { Model, Types } from "mongoose";
import { IVideo } from "../videos/video.interface";

const quizeData = {
  id: 1693045362448,
  question: "Test Quizz",
  video_id: 1690990637544,
  video_title:
    "Javascript Behind The Scene Intro & Javascript Engine Details in Bangla",
  options: [
    { id: 1693045323379, option: "yes", isCorrect: true },
    { id: 1693045343278, option: "ok", isCorrect: true },
    { id: 1693045349552, option: "no", isCorrect: false },
    { id: 1693045353354, option: "off", isCorrect: false },
  ],
};
type IOptions = {
  option: string;
  isCorrect: boolean;
};
export type IQuizzes = {
  question: string;
  video_id: Types.ObjectId | IVideo;
  options: IOptions;
};
export type QuizzesModel = Model<IQuizzes, Record<string, unknown>>;
