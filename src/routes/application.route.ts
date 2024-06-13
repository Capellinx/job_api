import { Router } from "express";
import { ApplicationController } from "../controllers/application.controller";
import { ValidateBody } from "../middlewares";
import { applicationCreateSchema } from "../schemas/application.schema";

export const applicationRouter = Router()

const applicationController = new ApplicationController()

applicationRouter.post("/:id/applications",
   ValidateBody.execute(applicationCreateSchema),
   applicationController.create
);
applicationRouter.get("/:id/applications", applicationController.findMany)
