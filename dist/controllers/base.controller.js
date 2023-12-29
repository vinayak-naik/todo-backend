"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const base_service_1 = __importDefault(require("../services/base.service"));
let BaseController = class BaseController {
    constructor(service) {
        this.post = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.service.post(req.body);
                res
                    .status(201)
                    .json({ data, success: true, message: "Created successfully" });
            }
            catch (error) {
                next(error);
            }
        });
        this.get = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.service.get();
                res.status(201).json({ data, success: true, message: "" });
            }
            catch (error) {
                next(error);
            }
        });
        this.getById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = yield this.service.getById(id);
                if (data === null) {
                    res.status(201).json({ data, success: true, message: "No data found" });
                    return;
                }
                res.status(201).json({ data, success: true, message: "" });
            }
            catch (error) {
                next(error);
            }
        });
        this.updateById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = yield this.service.getById(id);
                if (data === null) {
                    res
                        .status(201)
                        .json({ data, success: false, message: "No data found" });
                    return;
                }
                const update = yield this.service.updateById(id, req.body);
                if (update) {
                    res
                        .status(201)
                        .json({ update, success: true, message: "Updated successfully" });
                    return;
                }
                res.status(201).json({ data, success: true, message: "" });
            }
            catch (error) {
                next(error);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = yield this.service.delete(id);
                res
                    .status(201)
                    .json({ data, success: true, message: "Deleted successfully" });
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.service.deleteAll();
                res
                    .status(201)
                    .json({ data, success: true, message: "All deleted successfully" });
            }
            catch (error) {
                next(error);
            }
        });
        this.service = service;
    }
};
BaseController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [base_service_1.default])
], BaseController);
exports.default = BaseController;
