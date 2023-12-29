import mongoose from "mongoose";
import ModelIF from "../interfaces/model.interface";

export default class BaseService<T> {
  model: mongoose.Model<any, any>;
  constructor(model: ModelIF) {
    this.model = model.model;
  }

  post = async (data: T) => {
    const resourse = await this.model.create(data);
    return resourse;
  };

  get = async (filters = {}): Promise<T[]> => {
    const resource = (await this.model.find(filters)) as T[];
    return resource;
  };

  getById = async (id: string): Promise<T> => {
    const resource = (await this.model.findOne({
      _id: new mongoose.Types.ObjectId(id),
    })) as T;
    return resource;
  };
  updateById = async (id: string, data: any): Promise<T> => {
    const resource = (await this.model.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(id),
      },
      data,
    )) as T;
    return resource;
  };

  delete = (id: string): Promise<T> => {
    const resource = this.model.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    return resource;
  };
  deleteAll = (): Promise<T> => {
    const resource = this.model.deleteMany();
    return resource;
  };
}
