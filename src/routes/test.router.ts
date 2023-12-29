import { Request, Response, Router } from "express";

const testRouter = Router();

testRouter.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

export default testRouter;
