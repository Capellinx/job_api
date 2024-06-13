import { Router } from "express";
import { ApplicationController } from "../controllers/application.controller";

export const applicationRouter = Router()

const applicationController = new ApplicationController()

applicationRouter.post("/", applicationController.create)
applicationRouter.get("/", applicationController.findMany)
