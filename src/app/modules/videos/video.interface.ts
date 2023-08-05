import { Model } from "mongoose";

export type IVideo = {
  title: string;
  description: string;
  url: string;
  views: string;
  duration: string;
};
export type VideModel = Model<IVideo, Record<string, unknown>>;
