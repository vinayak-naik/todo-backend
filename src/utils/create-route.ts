import express, { Application, Router } from "express";
const createRoute = (app: Application) => {
  return (fn: (expRouter: Router, dbName: string) => express.Router) => {
    const expRouter: Router = express.Router();
    const dbName = app.settings.dbName;
    return fn(expRouter, dbName);
  };
};
export default createRoute;
