import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import {
  ILoginUser,
  ILoginUserResponse,
  IUserInterfaceWithId,
  userInterface,
} from "./user.interface";
import { Users } from "./user.model";
import { Secret } from "jsonwebtoken";

const registerUser = async (
  newData: userInterface
): Promise<ILoginUserResponse> => {
  if (!newData.password) {
    newData.password = config.default_admin_pass as string;
  }
  newData.role = "student";
  newData.isApproved = false;
  const newUser = await Users.create(newData);
  const { _id, role, email } = newUser;
  const accessToken = jwtHelpers.createToken(
    { _id, role, email },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  return {
    user: newUser,
    accessToken: accessToken,
  };
};
const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;
  const isUserExist = await Users.isUserExist(email);

  if (!isUserExist) {
    throw new Error("User does not exist");
  }

  if (
    isUserExist.password &&
    !(await Users.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new Error("Password is incorrect");
  }
  const { _id, role } = isUserExist as IUserInterfaceWithId;
  const accessToken = jwtHelpers.createToken(
    { _id, role, email },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  return {
    user: isUserExist,
    accessToken: accessToken,
  };
};
const getAllUsers = async (): Promise<userInterface[] | null> => {
  const allUsers = await Users.find({role: "student"});
  return allUsers;
};
const updateUsers = async (
  id: string,
  payload: Partial<userInterface>
): Promise<userInterface | null> => {
  const updatedData: Partial<userInterface> = { ...payload };
  const result = await Users.findOneAndUpdate({ _id: id }, updatedData, {
    new: true,
  });
  return result;
};
export const UserService = {
  registerUser,
  loginUser,
  getAllUsers,
  updateUsers,
};
