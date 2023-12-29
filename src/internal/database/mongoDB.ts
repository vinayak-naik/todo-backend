import mongoose from "mongoose";
import config from "../../config";
import { injectable } from "tsyringe";
import winstonLogger from "../../utils/logger";

const logger = winstonLogger("mongoDB");

const mongoUri = config.mongoUri || "";

@injectable()
class MongoDB {
  connect = async () => {
    try {
      await mongoose.connect(mongoUri);
      logger.info("mongoDB connected");
    } catch (error) {
      logger.error("Could not connect to mongoDB");
      process.exit(1);
    }
  };
}

export default MongoDB;
