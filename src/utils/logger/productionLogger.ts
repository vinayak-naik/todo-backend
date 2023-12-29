import { createLogger, format, transports } from "winston";

const { combine, timestamp, json } = format;

const productionLogger = (service: string) => {
  return createLogger({
    level: "debug",
    format: combine(timestamp(), json()),

    defaultMeta: { service },
    transports: [
      new transports.Console(),
      new transports.File({
        filename: "errors.log",
      }),
    ],
  });
};

export default productionLogger;
