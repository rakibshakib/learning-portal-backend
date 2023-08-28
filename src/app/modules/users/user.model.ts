import { Schema, model } from "mongoose";
import { UserModel, userInterface } from "./user.interface";
import config from "../../../config";
import bcrypt from "bcrypt";

const roles = ["admin", "student"];

const userSchema = new Schema<userInterface>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    role: {
      type: String,
      required: true,
      enum: roles,
    },
    name: {
      type: String,
      required: true,
    },
    isApproved: {
      type: Boolean,
      required: false,
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.statics.isUserExist = async function (
    email: string
): Promise<userInterface | null> {
  return await Users.findOne({ email });
};
userSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bycrypt_salt_rounds)
  );
  next();
});

export const Users = model<userInterface, UserModel>("Users", userSchema);
