import { Router } from "express";
import todoRoutes from "./todo.router";
import testRoutes from "./test.router";

const allRoutes = Router();

allRoutes.use("/", testRoutes);
allRoutes.use("/todo", todoRoutes);

export default allRoutes;
