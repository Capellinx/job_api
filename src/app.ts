import "express-async-errors"
import { opportunityRouter } from "./routes";
import { HandleErrors } from "./middlewares";

import express, { json } from "express";
import helmet from "helmet";

export const app = express();

app.use(helmet());
app.use(json());

app.use("/opportunities", opportunityRouter);

app.use(HandleErrors.execute)