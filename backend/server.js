import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import config from "./config/config.js";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(config.DBPATH, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(
    () => {
      app.listen(config.PORT, () => {
        console.log(`app is running on port ${config.PORT}`);
      });
    },
    (err) => {
      console.error(err);
    }
  );
export default app;
