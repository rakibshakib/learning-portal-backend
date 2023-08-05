import { IVideo } from "./video.interface";
import { Videos } from "./video.model";

const deleteVideoById = async (id: string): Promise<IVideo | null> => {
  const res = await Videos.findByIdAndDelete({
    _id: id,
  });
  return res;
};
const getVideoById = async (id: string): Promise<IVideo | null> => {
  const singleVideo = await Videos.findOne({ _id: id });
  return singleVideo;
};

const getAllVideos = async (): Promise<IVideo[] | null> => {
  const allVIdeos = await Videos.find({});
  return allVIdeos;
};
const createVideos = async (payload: IVideo): Promise<IVideo | null> => {
  const newVideo = await Videos.create(payload);
  return newVideo;
};
const updateVideos = async (
  id: string,
  payload: Partial<IVideo>
): Promise<IVideo | null> => {
  const isExistVideo = await Videos.findOne({ _id: id });
  if (!isExistVideo) {
    throw new Error("Videos Not Found");
  }
  const updatedData: Partial<IVideo> = { ...payload };
  const result = await Videos.findOneAndUpdate({ _id: id }, updatedData, {
    new: true,
  });
  return result;
};
export const VideoService = {
  deleteVideoById,
  getVideoById,
  getAllVideos,
  createVideos,
  updateVideos,
};
