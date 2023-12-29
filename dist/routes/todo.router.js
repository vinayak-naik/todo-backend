"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
const tsyringe_1 = require("tsyringe");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const todo_schema_1 = require("../schema/todo.schema");
const express_1 = require("express");
const todoRouter = (0, express_1.Router)();
const todoController = tsyringe_1.container.resolve(todo_controller_1.default);
todoRouter.get("/", [], todoController.get);
todoRouter.post("/", [(0, validateResource_1.default)(todo_schema_1.createTodoSchema)], todoController.post);
todoRouter.get("/:id", todoController.getById);
todoRouter.put("/:id", [(0, validateResource_1.default)(todo_schema_1.createTodoSchema)], todoController.updateById);
todoRouter.delete("/delete-all", todoController.deleteAll);
todoRouter.delete("/:id", todoController.delete);
exports.default = todoRouter;
