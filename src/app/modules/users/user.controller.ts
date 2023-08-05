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

  res.status(responseData.statusCode).json(responseData);
};
const loginUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const loginData = req.body;
  const result = await UserService.loginUser(loginData);
  // console.log(result);
  const responseData: IApiReponse<IAuthResponse> = {
    statusCode: 200,
    success: true,
    message: "User registered successfully!",
    data: result,
  };

  res.status(responseData.statusCode).json(responseData);
};
export const UserController = {
  registerUser,
  loginUser,
};
