import express from "express";
import { UserRoutes } from "../modules/users/user.routes";
import { VideoRoutes } from "../modules/videos/video.routes";

const router = express.Router();

router.use("/", UserRoutes)
router.use("/", VideoRoutes)

export default router;
