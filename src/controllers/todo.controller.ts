import { autoInjectable } from "tsyringe";
import TodoService from "../services/todo.service";
import BaseController from "./base.controller";

@autoInjectable()
export default class TodoController extends BaseController {
  constructor(service: TodoService) {
    super(service);
  }
}
