import mongoose from "mongoose";

export interface TodoIF {
  title: string;
  description: string;
}

export default interface TodoSIF extends TodoIF, mongoose.Document {}
