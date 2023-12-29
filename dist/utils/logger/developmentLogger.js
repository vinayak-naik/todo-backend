"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, label, printf } = winston_1.format;
const developmentLogger = (serviceName) => {
    const myFormat = printf(({ level, message, timestamp, service }) => {
        return `*[ ${service} ${level} ] ${timestamp} : ${message}`;
    });
    return (0, winston_1.createLogger)({
        level: "debug",
        format: combine(winston_1.format.colorize(), label({ label: "right meow!" }), winston_1.format.timestamp({ format: "HH:mm:ss" }), myFormat),
        defaultMeta: { service: serviceName },
        transports: [
            new winston_1.transports.Console(),
            new winston_1.transports.File({
                filename: "errors.log",
            }),
        ],
    });
};
exports.default = developmentLogger;
