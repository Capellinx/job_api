import { Router } from "express";
import { OpportunityControllers } from "../controllers/opportunity.controller";
import { applicationRouter } from "./application.route";

export const opportunityRouter = Router()

const opportunityController = new OpportunityControllers()

opportunityRouter.post("/", opportunityController.create)
opportunityRouter.get("/", opportunityController.findMany)
opportunityRouter.get("/:id", opportunityController.findOne)
opportunityRouter.patch("/:id", opportunityController.update)
opportunityRouter.delete("/", opportunityController.delete)

opportunityRouter.use("/:id/applications", applicationRouter)