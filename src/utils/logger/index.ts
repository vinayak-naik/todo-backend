import productionLogger from "./productionLogger";
import developmentLogger from "./developmentLogger";

const winstonLogger = (serviceName: string) => {
  const type =
    process.env.NODE_ENV === "production"
      ? productionLogger(serviceName)
      : developmentLogger(serviceName);
  return type;
};
export default winstonLogger;
