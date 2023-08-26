import { Model, Types } from "mongoose";
import { IVideo } from "../videos/video.interface";

const create = {
  id: 1692985545150,
  title: "Create a small To-Do application Using Javascript",
  video_id: 1690990637544,
  video_title:
    "Javascript Behind The Scene Intro & Javascript Engine Details in Bangla",
  totalMark: 100,
};
const update = {
  id: "1690991696446",
  title: "Explain Behind The Scene Intro & Javascript Engine Details",
  video_id: 1690990637544,
  video_title:
    "Javascript Behind The Scene Intro & Javascript Engine Details in Bangla",
  totalMark: 100,
};
// api: http://localhost:9000/assignments?video_id=1690991245836
// quiz: http://localhost:9000/quizzes?video_id=1690991245836
// assignementMarks: http://localhost:9000/assignmentMark?student_id=3&assignment_id=1690991245836
export type IAssignement = {
  title: string;
  video_id: Types.ObjectId | IVideo;
  totalMark: number;
};

export type IModifyIAssignement = {
  id: string;
  title: string;
  video_id: string;
  video_title: string;
  totalMark: number;
};

export type AssignmentModel = Model<IAssignement, Record<string, unknown>>;
