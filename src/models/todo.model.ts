import { injectable, singleton } from "tsyringe";
import mongoose from "mongoose";
import ModelIF from "../interfaces/model.interface";
import { TodoIF } from "../interfaces/todo.interface";

@singleton()
@injectable()
export default class TodoModel implements ModelIF {
  schema: mongoose.Schema<any> = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  );
  model: mongoose.Model<any, any> = mongoose.model<TodoIF>(
    "todos",
    this.schema,
  );
}
