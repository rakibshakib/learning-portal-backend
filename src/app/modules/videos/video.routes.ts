import express from "express";
import { VideoController } from "./video.controller";

const route = express.Router();

route.get("/videos/:id", VideoController.getVideoById);
route.get("/videos", VideoController.getAllVideos);
route.delete("/videos/:id", VideoController.deleteVideoById);
route.patch("/videos/:id", VideoController.updateVideos);
route.post("/videos", VideoController.createVideos);

export const VideoRoutes = route;
