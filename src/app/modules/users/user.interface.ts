import { Model } from "mongoose";

export type role = "admin" | "student";
export type userInterface = {
  email: string;
  password: string;
  role: role;
  name: string;
};

// export type UserModel = Model<userInterface, Record<string, unknown>>;
export type UserModel = {
  isUserExist(email: string): Promise<userInterface>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<userInterface>;
