import express from "express";
import { UserRoutes } from "../modules/users/user.routes";
import { VideoRoutes } from "../modules/videos/video.routes";
import { AssignmentRoutes } from "../modules/assignments/assignement.route";
import { QuizzesRoutes } from "../modules/quizzes/quizzes.routes";
import { AssignmentMarksRoutes } from "../modules/assignmentMark/asMark.routes";

const router = express.Router();

router.use("/", UserRoutes);
router.use("/", VideoRoutes);
router.use("/assignments", AssignmentRoutes);
router.use("/quizzes", QuizzesRoutes);
router.use("/assignmentMark", AssignmentMarksRoutes);

export default router;
