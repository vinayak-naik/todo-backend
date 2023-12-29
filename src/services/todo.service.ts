import { injectable } from "tsyringe";
import BaseService from "./base.service";
import { TodoIF } from "../interfaces/todo.interface";
import TodoModel from "../models/todo.model";

@injectable()
export default class UserService extends BaseService<TodoIF> {
  constructor(model: TodoModel) {
    super(model);
  }
}
