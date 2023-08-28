import { Model } from "mongoose";

export type role = "admin" | "student";
export type userInterface = {
  email: string;
  password: string;
  role: role;
  name: string;
  isApproved?: boolean
};

export type IAuthResponse = {
  user: Omit<userInterface, "password">;
  accessToken: string;
};

export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  user: Omit<userInterface, "password">;
  accessToken: string;
};

export interface IUserInterfaceWithId extends userInterface {
  _id: string;
}
export interface IUserWithId extends userInterface {
  id: string;
}
// export type UserModel = Model<userInterface, Record<string, unknown>>;
export type UserModel = {
  isUserExist(email: string): Promise<userInterface>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<userInterface>;
