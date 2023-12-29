import TodoController from "../controllers/todo.controller";
import { container } from "tsyringe";
import validateResource from "../middleware/validateResource";
import { createTodoSchema } from "../schema/todo.schema";
import { Router } from "express";

const todoRouter = Router();
const todoController = container.resolve(TodoController);

todoRouter.get("/", [], todoController.get);
todoRouter.post("/", [validateResource(createTodoSchema)], todoController.post);
todoRouter.get("/:id", todoController.getById);
todoRouter.put(
  "/:id",
  [validateResource(createTodoSchema)],
  todoController.updateById,
);
todoRouter.delete("/delete-all", todoController.deleteAll);
todoRouter.delete("/:id", todoController.delete);

export default todoRouter;
