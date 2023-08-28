import { IVideoId } from "../quizzes/quizzes.service";
import { IUserInterfaceWithId, IUserWithId } from "../users/user.interface";
import { IQuizMarks, IQuizMarksResponse } from "./quizMark.interface";
import { QuizMark } from "./quizMark.model";

const createQuizeMark = async (payload: IQuizMarks): Promise<IQuizMarks> => {
  const result = await QuizMark.create(payload);
  return result;
};
const getAllQuizMarks = async (): Promise<IQuizMarksResponse[] | []> => {
  const result = await QuizMark.find({}).populate(["student_id", "video_id"]);
  const modifyResponse = result.map((marks: any) => ({
    student_id: (marks?.student_id as IUserWithId)?.id,
    video_id: (marks?.video_id as IVideoId)?.id,
    totalQuiz: marks?.totalQuiz,
    totalCorrect: marks?.totalCorrect,
    totalWrong: marks?.totalWrong,
    totalMark: marks?.totalMark,
    mark: marks?.mark,
    id: marks?.id,
    student_name: (marks?.student_id as IUserWithId)?.name,
    video_title: (marks?.video_id as IVideoId)?.title,
  }));
  return modifyResponse;
};

export const QuizMarksService = {
  getAllQuizMarks,
  createQuizeMark,
};
