import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserService } from "./user.service";
import { IApiReponse } from "../../common/interface";
import {
  IAuthResponse,
  ILoginUserResponse,
  userInterface,
} from "./user.interface";

interface IUser extends userInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _doc: any;
}

const registerUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log("hitting for register");
  const registerUser = req.body;
  const { user, accessToken } = (await UserService.registerUser(
    registerUser
  )) as ILoginUserResponse;

  let restData;
  if (user) {
    // eslint-disable-next-line no-unsafe-optional-chaining, @typescript-eslint/no-unused-vars
    const { password, ...rest } = (user as IUser)?._doc;
    restData = rest;
  }
  const data = {
    user: restData,
    accessToken,
  };
  const responseData: IApiReponse<IAuthResponse> = {
    statusCode: 200,
    success: true,
    message: "User registered successfully!",
    data: data,
  };

  res.status(responseData.statusCode).json(data);
};
const loginUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const loginData = req.body;
  console.log("hitting login", loginData);
  const result = await UserService.loginUser(loginData);
  // console.log(result);
  const responseData: IApiReponse<IAuthResponse> = {
    statusCode: 200,
    success: true,
    message: "User registered successfully!",
    data: result,
  };

  res.status(responseData.statusCode).json(result);
};
const getAllUsers: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const users = await UserService.getAllUsers();
  // console.log(result);
  const responseData: IApiReponse<userInterface[]> = {
    statusCode: 200,
    success: true,
    message: "All Users",
    data: users,
  };

  res.status(responseData.statusCode).json(users);
};
const approvedUsers: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // const id = req.params.id as string;
  // const updated = req.body;
  const { id, updated } = req.body;
  const updatedQuizzes = await UserService.updateUsers(id, updated);
  const responseData: IApiReponse<userInterface> = {
    statusCode: 200,
    success: true,
    message: "Users Approved Successfully",
    data: updatedQuizzes,
  };
  res.status(responseData.statusCode).json(updatedQuizzes);
};
const getSingleUserById: RequestHandler =async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const result = await UserService.getSingleUserById(id);
  const responseData: IApiReponse<userInterface> = {
    statusCode: 200,
    success: true,
    message: "Single Video Loaded",
    data: result,
  };
  res.status(responseData.statusCode).json(result);
};
export const UserController = {
  registerUser,
  loginUser,
  getAllUsers,
  approvedUsers,
  getSingleUserById
};
