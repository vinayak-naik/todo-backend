"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_router_1 = __importDefault(require("./todo.router"));
const test_router_1 = __importDefault(require("./test.router"));
const allRoutes = (0, express_1.Router)();
allRoutes.use("/", test_router_1.default);
allRoutes.use("/todo", todo_router_1.default);
exports.default = allRoutes;
