"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const routes_1 = __importDefault(require("../../routes"));
const api_error_handler_1 = __importDefault(require("../../middleware/error/api-error-handler"));
let App = class App {
    constructor() {
        this.setup = () => {
            const app = (0, express_1.default)();
            app.use(express_1.default.json());
            app.get("/test", (req, res) => {
                res.send("This is test api!");
            });
            app.use(routes_1.default);
            app.use(api_error_handler_1.default);
            return app;
        };
    }
};
App = __decorate([
    (0, tsyringe_1.injectable)()
], App);
exports.default = App;
