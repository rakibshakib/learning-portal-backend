import { NextFunction, Request, RequestHandler, Response } from "express";
import { QuizMarksService } from "./quizMark.service";
import { IApiReponse } from "../../common/interface";
import { IQuizMarks } from "./quizMark.interface";

const createQuizeMark: RequestHandler = async (
  req: Request,
  res: Response,
  nex: NextFunction
) => {
  const payload = req.body;
  const result = await QuizMarksService.createQuizeMark(payload);
  const responseData: IApiReponse<IQuizMarks> = {
    statusCode: 200,
    success: true,
    message: "Quiz Successfully Submitted",
    data: result,
  };
  res.status(responseData.statusCode).json(result);
};

const getAllQuizMarks: RequestHandler = async (
  req: Request,
  res: Response,
  nex: NextFunction
) => {
  let result = null;
  const { student_id, video_id } = req?.query;
  if (student_id && video_id) {
    result = await QuizMarksService.getQuizMarksByUserIdandVidID(
      student_id as string,
      video_id as string
    );
  } else {
    result = await await QuizMarksService.getAllQuizMarks();
  }
  // const result = await QuizMarksService.getAllQuizMarks();
  res.status(200).json(result);
};

export const QuizMarksController = {
  createQuizeMark,
  getAllQuizMarks,
};
