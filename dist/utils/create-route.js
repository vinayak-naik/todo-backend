"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createRoute = (app) => {
    return (fn) => {
        const expRouter = express_1.default.Router();
        const dbName = app.settings.dbName;
        return fn(expRouter, dbName);
    };
};
exports.default = createRoute;
