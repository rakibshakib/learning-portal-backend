import express from "express";
import { VideoController } from "./video.controller";

const route = express.Router();

route.delete("/videos/:id", VideoController.deleteVideoById)
route.get("/videos/:id", VideoController.getVideoById)
route.get("/videos", VideoController.getAllVideos)
route.post("/videos", VideoController.createVideos)
route.patch("/videos", VideoController.updateVideos)



export const VideoRoutes = route;
