import { Model, Types } from "mongoose";
import { ILoginUser, userInterface } from "../users/user.interface";
import { IAssignement } from "../assignments/assignment.interface";

// const api = http://localhost:9000/assignmentMark
const create = {
  id: 1693055740244,
  student_id: 3,
  student_name: "Akash Ahmed",
  assignment_id: 1690990637544,
  title:
    "Javascript Behind The Scene Intro & Javascript Engine Details in Bangla",
  createdAt: "2023-08-26T13:15:40.244Z",
  totalMark: 100,
  mark: 0,
  repo_link: "https://github.com/rakibshakib/learning-portal-backend",
  status: "pending",
};
// assingmarks = http://localhost:9000/assignmentMark/1693055740244
const assign = {
  id: 1693055740244,
  student_id: 3,
  student_name: "Akash Ahmed",
  assignment_id: 1690990637544,
  title:
    "Javascript Behind The Scene Intro & Javascript Engine Details in Bangla",
  createdAt: "2023-08-26T13:15:40.244Z",
  totalMark: 100,
  mark: 90,
  repo_link: "https://github.com/rakibshakib/learning-portal-backend",
  status: "published",
  assingMarks: "90",
};

export type IAssignmentMarks = {
  id: string;
  student_id: Types.ObjectId | userInterface;
  student_name?: string;
  assignment_id: Types.ObjectId | IAssignement;
  title: string;
  totalMark: number;
  mark: number;
  repo_link: string;
  assingMarks?: string;
  status: "pending" | "published";
};

// export type IModifyIQuizzes = {
//   id: string;
//   question: string;
//   video_id: string;
//   video_title: string;
//   options: IOptions[];
// };

export type IResponseAssignmentsMarks = {
  student_id: string;
  student_name: string;
  assignment_id: string;
  title: string;
  totalMark: number;
  mark: number;
  repo_link: string;
  status: string;
  assingMarks: string;
};

export type AssignmentMarksModel = Model<
  IAssignmentMarks,
  Record<string, unknown>
>;
