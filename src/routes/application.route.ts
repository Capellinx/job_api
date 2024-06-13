import { Router } from "express";
import { ApplicationController } from "../controllers/application.controller";

export const applicationRouter = Router()

const applicationController = new ApplicationController()

applicationRouter.post("/:id/applications", applicationController.create)
applicationRouter.get("/:id/applications", applicationController.findMany)
