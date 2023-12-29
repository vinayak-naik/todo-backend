import winstonLogger from "../../utils/logger";

const logger = winstonLogger("mySqlDB");

const mySqlConnect = () => {
  const dbName = "mySqlDB";

  const connect = async () => {
    try {
      logger.info("mySqlDB connected");
    } catch (error) {
      logger.error("Could not connect to mySqlDB");
      process.exit(1);
    }
  };
  return {
    dbName,
    connect,
  };
};

export default mySqlConnect;
