import express from "express";
import { AssignmentMarksController } from "./asMarks.controller";

const route = express.Router();

route.post("/:id", AssignmentMarksController.updateAssignmentMarks);
route.post("/", AssignmentMarksController.postAssignmentMarks);
route.get("/", AssignmentMarksController.getAllAssignmentMarks);

export const AssignmentMarksRoutes = route;
