import { Model, Types } from "mongoose";
import { IVideo } from "../videos/video.interface";

type IOptions = {
  id: number;
  option: string;
  isCorrect: boolean;
};
export type IQuizzes = {
  question: string;
  video_id: Types.ObjectId | IVideo;
  options: IOptions[];
};

export type IModifyIQuizzes = {
  id: string;
  question: string;
  video_id: string;
  video_title: string;
  options: IOptions[];
};

export type QuizzesModel = Model<IQuizzes, Record<string, unknown>>;

/* 


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
const demo = [
  {
    id: 1690991309312,
    question: "Which JavaScript engine is used in Google Chrome?",
    video_id: 1690991245836,
    video_title:
      "Javascript Behind The Scene Execution Context Basics in Bangla",
    options: [
      {
        id: 1690991257402,
        option: "SpiderMonkey",
        isCorrect: false,
      },
      {
        id: 1690991287362,
        option: "V8",
        isCorrect: true,
      },
      {
        id: 1690991293942,
        option: "Chakra",
        isCorrect: false,
      },
      {
        id: 1690991299075,
        option: "Nashorn",
        isCorrect: false,
      },
    ],
  },
  {
    id: 1690991358390,
    question:
      "What is the primary function of the Just-In-Time (JIT) compiler in a JavaScript engine?",
    video_id: 1690991245836,
    video_title:
      "Javascript Behind The Scene Execution Context Basics in Bangla",
    options: [
      {
        id: 1690991309690,
        option: "To convert JavaScript code to CSS",
        isCorrect: false,
      },
      {
        id: 1690991330893,
        option:
          "To optimize and compile JavaScript code into efficient machine code during runtime",
        isCorrect: true,
      },
      {
        id: 1690991345486,
        option: "To interpret JavaScript code line by line",
        isCorrect: false,
      },
      {
        id: 1690991351952,
        option: "To generate HTML elements dynamically",
        isCorrect: false,
      },
    ],
  },
];


*/
