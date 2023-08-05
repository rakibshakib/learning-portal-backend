import { Request, Response } from "express";
import { VideoService } from "./video.service";
import { IApiReponse } from "../../common/interface";
import { IVideo } from "./video.interface";

const deleteVideoById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const update = await VideoService.deleteVideoById(id);
  const responseData: IApiReponse<IVideo> = {
    statusCode: 200,
    success: true,
    message: "Video deleted successfully!",
    data: update,
  };
  res.status(responseData.statusCode).json(responseData);
};
const getVideoById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const result = await VideoService.getVideoById(id);
  const responseData: IApiReponse<IVideo> = {
    statusCode: 200,
    success: true,
    message: "Single Video Loaded",
    data: result,
  };
  res.status(responseData.statusCode).json(responseData);
};
const getAllVideos = async (req: Request, res: Response): Promise<void> => {
  const allVideos = await VideoService.getAllVideos();
  const responseData: IApiReponse<IVideo[]> = {
    statusCode: 200,
    success: true,
    message: "All Video Loaded",
    data: allVideos,
  };
  res.status(responseData.statusCode).json(responseData);
};
const createVideos = async (req: Request, res: Response) => {
  const videos = req.body;
  const result = await VideoService.createVideos(videos);
  const responseData: IApiReponse<IVideo> = {
    statusCode: 200,
    success: true,
    message: "New Video Created",
    data: result,
  };
  res.status(responseData.statusCode).json(responseData);
};
const updateVideos = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const updated = req.body;
  const updatedVideos = await VideoService.updateVideos(id, updated);
  const responseData: IApiReponse<IVideo> = {
    statusCode: 200,
    success: true,
    message: "Video Updated Successfully",
    data: updatedVideos,
  };
  res.status(responseData.statusCode).json(responseData);
};
export const VideoController = {
  deleteVideoById,
  getVideoById,
  getAllVideos,
  createVideos,
  updateVideos,
};
