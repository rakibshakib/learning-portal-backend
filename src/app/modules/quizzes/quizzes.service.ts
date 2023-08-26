import { IVideo } from "../videos/video.interface";
import { IModifyIQuizzes, IQuizzes } from "./quizzes.interface";
import { Quizzes } from "./quizzes.model";

interface IVideoId extends IVideo {
  id: string;
}

const createQuizzes = async (payload: IQuizzes): Promise<IQuizzes | null> => {
  const result = await Quizzes.create(payload);
  return result;
};
const updateQuizzes = async (
  id: string,
  payload: Partial<IQuizzes>
): Promise<IQuizzes | null> => {
  const isExistVideo = await Quizzes.findOne({ _id: id });
  if (!isExistVideo) {
    throw new Error("Quizzes Not Found");
  }
  const updatedData: Partial<IQuizzes> = { ...payload };
  const result = await Quizzes.findOneAndUpdate({ _id: id }, updatedData, {
    new: true,
  });
  return result;
};
const deleteQuizzes = async (id: string): Promise<IQuizzes | null> => {
  const res = await Quizzes.findByIdAndDelete({
    _id: id,
  });
  return res;
};
const getQuizzesById = async (id: string): Promise<IModifyIQuizzes | {}> => {
  const singleQuizzes = await Quizzes.findOne({
    _id: id,
  }).populate("video_id");
  const modified = {
    id: singleQuizzes?.id,
    question: singleQuizzes?.question,
    video_id: (singleQuizzes?.video_id as IVideoId)?.id,
    video_title: (singleQuizzes?.video_id as IVideoId)?.title,
    options: singleQuizzes?.options,
  };

  return modified;
};
const getQuizzesByFilter = async (
  video_id?: string
): Promise<IModifyIQuizzes[] | []> => {
  const allQuizzes = await Quizzes.find({ video_id: video_id }).populate(
    "video_id"
  );
  const modified = modifiedQuizResponse(allQuizzes);
  return modified;
};
const getAllQuizzes = async (): Promise<IModifyIQuizzes[] | []> => {
  const allQuizzes = await Quizzes.find({}).populate("video_id");
  const modified = modifiedQuizResponse(allQuizzes);
  return modified;
};
export const QuizzesService = {
  createQuizzes,
  deleteQuizzes,
  updateQuizzes,
  getQuizzesByFilter,
  getAllQuizzes,
  getQuizzesById,
};

const modifiedQuizResponse = (allQuizzes: IQuizzes[]) => {
  const modified = allQuizzes.map((singleQuizzes: any) => ({
    id: singleQuizzes?.id,
    question: singleQuizzes?.question,
    video_id: (singleQuizzes?.video_id as IVideoId)?.id,
    video_title: (singleQuizzes?.video_id as IVideoId)?.title,
    options: singleQuizzes?.options,
  }));
  return modified;
};
