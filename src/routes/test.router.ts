import { Request, Response, Router } from "express";

const testRouter = Router();

testRouter.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

export default testRouter;
