import mongoose from "mongoose";

export default interface ModelIF {
  schema: mongoose.Schema<any>;
  model: mongoose.Model<any, any>;
}
