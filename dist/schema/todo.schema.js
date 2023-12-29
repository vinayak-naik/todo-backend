"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodoSchema = void 0;
const zod_1 = require("zod");
exports.createTodoSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        title: (0, zod_1.string)({
            required_error: "Title name is required",
        }),
        description: (0, zod_1.string)({
            required_error: "Description name is required",
        }),
    }),
});
