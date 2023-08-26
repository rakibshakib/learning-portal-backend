import { NextFunction, Request, RequestHandler, Response } from "express";
import { AssignmentService } from "./assignment.service";
import { IApiReponse } from "../../common/interface";
import { IAssignement, IModifyIAssignement } from "./assignment.interface";

const createAssignement: RequestHandler = async (
  req: Request,
  res: Response,
  nex: NextFunction
) => {
  const payload = req.body;
  const result = await AssignmentService.createAssignement(payload);
  const responseData: IApiReponse<IAssignement> = {
    statusCode: 200,
    success: true,
    message: "New Assignement Created",
    data: result,
  };
  res.status(responseData.statusCode).json(responseData);
};
const updateAssignement: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id as string;
  const updated = req.body;
  const updatedAssignement = await AssignmentService.updateAssignement(
    id,
    updated
  );
  const responseData: IApiReponse<IAssignement> = {
    statusCode: 200,
    success: true,
    message: "Assignement Updated Successfully",
    data: updatedAssignement,
  };
  res.status(responseData.statusCode).json(responseData);
};
const deleteAssignement: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const update = await AssignmentService.deleteAssignement(id);
  const responseData: IApiReponse<IAssignement> = {
    statusCode: 200,
    success: true,
    message: "Assignement deleted successfully!",
    data: update,
  };
  res.status(responseData.statusCode).json(responseData);
};
const getAssignement: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { video_id } = req?.query;
  if (video_id) {
    const result = await AssignmentService.getAssignementByFilter(
      video_id ? (video_id as string) : undefined
    );
    const responseData: IApiReponse<IModifyIAssignement | {}> = {
      statusCode: 200,
      success: true,
      message: "Single Assignment Loaded",
      data: result,
    };
    res.status(responseData.statusCode).json(responseData);
  } else {
    const result = await AssignmentService.getAllAssignement();
    const responseData: IApiReponse<IModifyIAssignement[] | []> = {
      statusCode: 200,
      success: true,
      message: "All Assignment Loaded",
      data: result,
    };
    res.status(responseData.statusCode).json(responseData);
  }
};
export const AssignmentController = {
  createAssignement,
  deleteAssignement,
  updateAssignement,
  getAssignement,
};
