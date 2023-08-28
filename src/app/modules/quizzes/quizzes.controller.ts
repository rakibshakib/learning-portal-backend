import { NextFunction, Request, RequestHandler, Response } from "express";
import { IApiReponse } from "../../common/interface";
import { IModifyIQuizzes, IQuizzes } from "./quizzes.interface";
import { QuizzesService } from "./quizzes.service";

const createQuizzes: RequestHandler = async (
  req: Request,
  res: Response,
  nex: NextFunction
) => {
  const payload = req.body;
  console.log({ payload });
  const result = await QuizzesService.createQuizzes(payload);
  const responseData: IApiReponse<IQuizzes> = {
    statusCode: 200,
    success: true,
    message: "New Quizzes Created",
    data: result,
  };
  res.status(responseData.statusCode).json(result);
};
const updateQuizzes: RequestHandler = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const updated = req.body;
  const updatedQuizzes = await QuizzesService.updateQuizzes(id, updated);
  const responseData: IApiReponse<IQuizzes> = {
    statusCode: 200,
    success: true,
    message: "Quizzes Updated Successfully",
    data: updatedQuizzes,
  };
  res.status(responseData.statusCode).json(updatedQuizzes);
};
const deleteQuizzes: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const update = await QuizzesService.deleteQuizzes(id);
  const responseData: IApiReponse<IQuizzes> = {
    statusCode: 200,
    success: true,
    message: "Quizzes deleted successfully!",
    data: update,
  };
  res.status(responseData.statusCode).json(update);
};
const getQuizzes: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { video_id } = req?.query;
  if (video_id) {
    const result = await QuizzesService.getQuizzesByFilter(video_id as string);
    const responseData: IApiReponse<IModifyIQuizzes[]> = {
      statusCode: 200,
      success: true,
      message: "All Quizzes Loaded by video",
      data: result,
    };
    res.status(responseData.statusCode).json(result);
  } else {
    const result = await QuizzesService.getAllQuizzes();
    const responseData: IApiReponse<IModifyIQuizzes[] | []> = {
      statusCode: 200,
      success: true,
      message: "All Quizzes Loaded",
      data: result,
    };
    res.status(responseData.statusCode).json(result);
  }
};
const getQuizzesById: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const update = await QuizzesService.getQuizzesById(id);
  const responseData: IApiReponse<IModifyIQuizzes | {}> = {
    statusCode: 200,
    success: true,
    message: "Quizzes loaded successfully!",
    data: update,
  };
  res.status(responseData.statusCode).json(update);
};
export const QuizzesController = {
  createQuizzes,
  deleteQuizzes,
  updateQuizzes,
  getQuizzes,
  getQuizzesById,
};
