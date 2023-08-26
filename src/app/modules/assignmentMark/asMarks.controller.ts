import { NextFunction, Request, RequestHandler, Response } from "express";
import { AssignmentMarksService } from "./asMark.service";
import { IApiReponse } from "../../common/interface";
import {
  IAssignmentMarks,
  IResponseAssignmentsMarks,
} from "./asMarks.interface";

const postAssignmentMarks: RequestHandler = async (
  req: Request,
  res: Response,
  nex: NextFunction
) => {
  const payload = req.body;
  const result = await AssignmentMarksService.postAssignmentMarks(payload);
  const responseData: IApiReponse<IAssignmentMarks> = {
    statusCode: 200,
    success: true,
    message: "Assignment Successfully Submitted",
    data: result,
  };
  res.status(responseData.statusCode).json(responseData);
};
const updateAssignmentMarks: RequestHandler = async (
  req: Request,
  res: Response,
  nex: NextFunction
) => {
  const id = req.params.id as string;
  const updated = req.body;
  const updatedQuizzes = await AssignmentMarksService.updateAssignmentMarks(
    id,
    updated
  );
  const responseData: IApiReponse<IAssignmentMarks> = {
    statusCode: 200,
    success: true,
    message: "Assignment Successfully Submitted",
    data: updatedQuizzes,
  };
  res.status(responseData.statusCode).json(responseData);
};
const getAllAssignmentMarks: RequestHandler = async (
  req: Request,
  res: Response,
  nex: NextFunction
) => {
  const result = await AssignmentMarksService.getAllAssignmentMarks();
  const responseData: IApiReponse<IResponseAssignmentsMarks[]> = {
    statusCode: 200,
    success: true,
    message: "Assignment Successfully Loaded",
    data: result,
  };
  res.status(responseData.statusCode).json(responseData);
};

export const AssignmentMarksController = {
  postAssignmentMarks,
  getAllAssignmentMarks,
  updateAssignmentMarks,
};
