"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, json } = winston_1.format;
const productionLogger = (service) => {
    return (0, winston_1.createLogger)({
        level: "debug",
        format: combine(timestamp(), json()),
        defaultMeta: { service },
        transports: [
            new winston_1.transports.Console(),
            new winston_1.transports.File({
                filename: "errors.log",
            }),
        ],
    });
};
exports.default = productionLogger;
