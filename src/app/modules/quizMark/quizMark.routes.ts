import express from "express";
import { QuizMarksController } from "./quizMark.controller";

const route = express.Router();

route.post("/", QuizMarksController.createQuizeMark);
route.get("/", QuizMarksController.getAllQuizMarks);

export const QuizzMarksRoutes = route;
