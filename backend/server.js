import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import config from "./config/config.js";
import mongoose from "mongoose";
import cors from "cors";

//importing routers
import userRoutes from "./routes/index.js";

const app = express();
// Allow Cross-Origin requests
app.use(cors());

app.use(helmet());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/", userRoutes);
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
