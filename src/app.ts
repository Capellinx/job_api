
import { opportunityRouter } from "./routes";

import express, { json } from "express";
import helmet from "helmet";

export const app = express();

app.use(helmet());
app.use(json());

app.use("/opportunities", opportunityRouter);