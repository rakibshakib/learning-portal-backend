import { AssignmentController } from "./assignement.controller";
import express from "express";

const route = express.Router();

route.get("/", AssignmentController.getAssignement);
route.delete("/:id", AssignmentController.deleteAssignement);
route.patch("/:id", AssignmentController.updateAssignement);
route.post("/", AssignmentController.createAssignement);

export const AssignmentRoutes = route;
