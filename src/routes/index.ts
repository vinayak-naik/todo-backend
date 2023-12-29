import { Router } from "express";
import todoRoutes from "./todo.router";

const allRoutes = Router();

allRoutes.use("/todo", todoRoutes);

export default allRoutes;
