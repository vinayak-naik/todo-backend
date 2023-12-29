"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = __importDefault(require("./internal/server"));
const tsyringe_1 = require("tsyringe");
const server = tsyringe_1.container.resolve(server_1.default);
server.create();
