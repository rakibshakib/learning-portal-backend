import { Schema, model } from "mongoose";
import { IVideo, VideModel } from "./video.interface";

export const videoSchema = new Schema<IVideo>(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    duration: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
      unique: true,
    },
    views: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const Videos = model<IVideo, VideModel>("Videos", videoSchema);
