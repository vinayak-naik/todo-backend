import express, { Request, Response } from "express";
import { injectable } from "tsyringe";
import allRoutes from "../../routes";
import errorHandler from "../../middleware/error/api-error-handler";

@injectable()
class App {
  setup = () => {
    const app = express();
    app.use(express.json());
    app.get("/test", (req: Request, res: Response) => {
      res.send("This is test api!");
    });
    app.use(allRoutes);
    app.get("/", (req: Request, res: Response) => {
      res.send("Route not found --Vinayak!");
    });

    app.use(errorHandler);
    return app;
  };
}

export default App;
