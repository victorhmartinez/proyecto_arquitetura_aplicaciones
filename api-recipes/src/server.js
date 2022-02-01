import express from "express";
import morgan from "morgan";
import cors from "cors";

import config from "./config/config";

// Import index router
import routes from "./routes";

// Import our middlewares
import errorHandler from "./middlewares/errorHandler";

const app = express();

// Configs
app.set("port", config.PORT);

// Middlewares
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  }),
);
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use(routes);

// Use handleError middleware
app.use(errorHandler);

export default app;
