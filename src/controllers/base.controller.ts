import { NextFunction, Request, Response } from "express";
import { injectable } from "tsyringe";
import BaseService from "../services/base.service";

@injectable()
export default class BaseController {
  service: BaseService<any>;
  constructor(service: BaseService<any>) {
    this.service = service;
  }

  post = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.post(req.body);
      res
        .status(201)
        .json({ data, success: true, message: "Created successfully" });
    } catch (error) {
      next(error);
    }
  };

  get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.get();
      res.status(201).json({ data, success: true, message: "" });
    } catch (error) {
      next(error);
    }
  };
  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.service.getById(id);
      if (data === null) {
        res.status(201).json({ data, success: true, message: "No data found" });
        return;
      }
      res.status(201).json({ data, success: true, message: "" });
    } catch (error) {
      next(error);
    }
  };

  updateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.service.getById(id);
      if (data === null) {
        res
          .status(201)
          .json({ data, success: false, message: "No data found" });
        return;
      }
      const update = await this.service.updateById(id, req.body);
      if (update) {
        res
          .status(201)
          .json({ update, success: true, message: "Updated successfully" });
        return;
      }
      res.status(201).json({ data, success: true, message: "" });
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.service.delete(id);
      res
        .status(201)
        .json({ data, success: true, message: "Deleted successfully" });
    } catch (error) {
      next(error);
    }
  };

  deleteAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.deleteAll();
      res
        .status(201)
        .json({ data, success: true, message: "All deleted successfully" });
    } catch (error) {
      next(error);
    }
  };
}
