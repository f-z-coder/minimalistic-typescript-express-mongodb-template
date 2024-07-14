import express from "express";
import cors from "cors";
import connectToDB from "./utilities/connectToDB.js";
import eventRouter from "./routes/eventRoutes.js";
import { EVENT_BASE_URL } from "./consts/eventConst.js";
import { ENV_CONST } from "./consts/envConst.js";
import errorHandlerMiddleware from "middlewares/errorHandlerMiddleware.js";

const app = express();

connectToDB();

//cors policy
app.use(cors({ origin: ENV_CONST.FRONTEND_HOST_URL }));

app.use(express.json());

//routes
app.use(EVENT_BASE_URL, eventRouter);

// Error handling middleware should be the last one
app.use(errorHandlerMiddleware);

app.listen(ENV_CONST.PORT, () => {
  console.log("server started on port", ENV_CONST.PORT);
});
