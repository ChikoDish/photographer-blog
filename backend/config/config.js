import dotenv from "dotenv";
dotenv.config();
const config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 3002,
  DBPATH: process.env.DBPATH,
};
export default config;
