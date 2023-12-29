import { autoInjectable } from "tsyringe";
import config from "../config";
import App from "./app";
import MongoDB from "./database/mongoDB";
import winstonLogger from "../utils/logger";

const logger = winstonLogger("Server");

@autoInjectable()
class Server {
  app: App;
  port: number;
  database: MongoDB;

  constructor(app: App, database: MongoDB) {
    this.port = config.port;
    this.app = app;
    this.database = database;
  }

  create = async () => {
    const app = this.app.setup();
    app.listen(this.port, async () => {
      logger.info(`App is running at http://localhost:${this.port}`);
      this.database.connect();
    });
  };
}

export default Server;
