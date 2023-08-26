import { IVideo } from "../videos/video.interface";
import { IAssignement, IModifyIAssignement } from "./assignment.interface";
import { Assignment } from "./assignment.model";

interface IVideoId extends IVideo {
  id: string;
}


const createAssignement = async (
  payload: IAssignement
): Promise<IAssignement | null> => {
  const assignment = await Assignment.create(payload);
  return assignment;
};
const updateAssignement = async (
  id: string,
  payload: Partial<IAssignement>
): Promise<IAssignement | null> => {
  const isExistVideo = await Assignment.findOne({ _id: id });
  if (!isExistVideo) {
    throw new Error("Assignment Not Found");
  }
  const updatedData: Partial<IAssignement> = { ...payload };
  const result = await Assignment.findOneAndUpdate({ _id: id }, updatedData, {
    new: true,
  });
  return result;
};
const deleteAssignement = async (id: string): Promise<IAssignement | null> => {
  const res = await Assignment.findByIdAndDelete({
    _id: id,
  });
  return res;
};
const getAssignmentById = async (id: string): Promise<IAssignement | null> => {
  const res = await Assignment.findOne({
    _id: id,
  });
  return res;
};
const getAssignementByFilter = async (
  video_id?: string
): Promise<IModifyIAssignement | {}> => {
  const singleVideo = await Assignment.findOne({ video_id: video_id }).populate(
    "video_id"
  );
  const modifyObject = {
    id: singleVideo?.id,
    title: singleVideo?.title,
    video_id: (singleVideo?.video_id as IVideoId)?.id,
    video_title: (singleVideo?.video_id as IVideoId)?.title,
    totalMark: singleVideo?.totalMark,
  };
  return modifyObject;
};
const getAllAssignement = async (): Promise<IModifyIAssignement[] | []> => {
  const allAssignment = await Assignment.find({}).populate("video_id");
  const modified = allAssignment.map((singleVideo) => ({
    id: singleVideo?.id,
    title: singleVideo?.title,
    video_id: (singleVideo?.video_id as IVideoId)?.id,
    video_title: (singleVideo?.video_id as IVideoId)?.title,
    totalMark: singleVideo?.totalMark,
  }));
  return modified;
};
export const AssignmentService = {
  createAssignement,
  deleteAssignement,
  updateAssignement,
  getAssignementByFilter,
  getAllAssignement,
  getAssignmentById,
};
