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
  res.status(responseData.statusCode).json(result);
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
  res.status(responseData.statusCode).json(updatedQuizzes);
};
const getAllAssignmentMarks: RequestHandler = async (
  req: Request,
  res: Response,
  nex: NextFunction
) => {
  const { student_id, assignment_id } = req?.query;
  console.log(student_id, assignment_id, req?.query);
  let result = null;
  if (student_id && assignment_id) {
    console.log(student_id, assignment_id, req?.query, "in condition");
    result =
      await AssignmentMarksService.getAllAssignmentByUserIdandAsssignmentID(
        student_id as string,
        assignment_id as string
      );
  } else {
    result = await AssignmentMarksService.getAllAssignmentMarks();
  }
  // const responseData: IApiReponse<IResponseAssignmentsMarks[]> = {
  //   statusCode: 200,
  //   success: true,
  //   message: "Assignment Successfully Loaded",
  //   data: result,
  // };
  res.status(200).json(result);
};

export const AssignmentMarksController = {
  postAssignmentMarks,
  getAllAssignmentMarks,
  updateAssignmentMarks,
};
