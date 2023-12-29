import { createLogger, format, transports } from "winston";

const { combine, label, printf } = format;

const developmentLogger = (serviceName: string) => {
  const myFormat = printf(({ level, message, timestamp, service }) => {
    return `*[ ${service} ${level} ] ${timestamp} : ${message}`;
  });

  return createLogger({
    level: "debug",
    format: combine(
      format.colorize(),
      label({ label: "right meow!" }),
      format.timestamp({ format: "HH:mm:ss" }),
      myFormat,
    ),

    defaultMeta: { service: serviceName },
    transports: [
      new transports.Console(),
      new transports.File({
        filename: "errors.log",
      }),
    ],
  });
};
export default developmentLogger;
