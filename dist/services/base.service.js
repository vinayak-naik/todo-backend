"use strict";
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
const mongoose_1 = __importDefault(require("mongoose"));
class BaseService {
    constructor(model) {
        this.post = (data) => __awaiter(this, void 0, void 0, function* () {
            const resourse = yield this.model.create(data);
            return resourse;
        });
        this.get = (filters = {}) => __awaiter(this, void 0, void 0, function* () {
            const resource = (yield this.model.find(filters));
            return resource;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const resource = (yield this.model.findOne({
                _id: new mongoose_1.default.Types.ObjectId(id),
            }));
            return resource;
        });
        this.updateById = (id, data) => __awaiter(this, void 0, void 0, function* () {
            const resource = (yield this.model.findOneAndUpdate({
                _id: new mongoose_1.default.Types.ObjectId(id),
            }, data));
            return resource;
        });
        this.delete = (id) => {
            const resource = this.model.deleteOne({
                _id: new mongoose_1.default.Types.ObjectId(id),
            });
            return resource;
        };
        this.deleteAll = () => {
            const resource = this.model.deleteMany();
            return resource;
        };
        this.model = model.model;
    }
}
exports.default = BaseService;
