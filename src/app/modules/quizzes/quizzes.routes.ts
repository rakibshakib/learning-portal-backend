import express from "express";
import { QuizzesController } from "./quizzes.controller";

const route = express.Router();

route.get("/:id", QuizzesController.getQuizzesById);
route.get("/", QuizzesController.getQuizzes);
route.delete("/:id", QuizzesController.deleteQuizzes);
route.patch("/:id", QuizzesController.updateQuizzes);
route.post("/", QuizzesController.createQuizzes);

export const QuizzesRoutes = route;
