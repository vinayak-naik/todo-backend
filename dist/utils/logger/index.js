"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productionLogger_1 = __importDefault(require("./productionLogger"));
const developmentLogger_1 = __importDefault(require("./developmentLogger"));
const winstonLogger = (serviceName) => {
    const type = process.env.NODE_ENV === "production"
        ? (0, productionLogger_1.default)(serviceName)
        : (0, developmentLogger_1.default)(serviceName);
    return type;
};
exports.default = winstonLogger;
