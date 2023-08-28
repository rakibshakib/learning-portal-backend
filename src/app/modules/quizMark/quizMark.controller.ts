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
  const result = await QuizMarksService.getAllQuizMarks();
  // const responseData: IApiReponse<IQuizMarks[]> = {
  //   statusCode: 200,
  //   success: true,
  //   message: "All Quiz Successfully Loaded",
  //   data: result,
  // };
  res.status(200).json(result);
};

export const QuizMarksController = {
  createQuizeMark,
  getAllQuizMarks,
};
