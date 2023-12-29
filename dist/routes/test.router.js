"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testRouter = (0, express_1.Router)();
testRouter.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running --Vinayak",
    });
});
exports.default = testRouter;
