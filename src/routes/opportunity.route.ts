import { Router } from "express";
import { OpportunityControllers } from "../controllers/opportunity.controller";
import { applicationRouter } from "./application.route";
import { IsOpportunityIdValid, ValidateBody } from "../middlewares";
import { opportunityCreateSchema } from "../schemas/opportunity.schema";
import { app } from "../app";

export const opportunityRouter = Router();

const opportunityController = new OpportunityControllers();


opportunityRouter.post("/",
   ValidateBody.execute(opportunityCreateSchema),
   opportunityController.create
);
opportunityRouter.get("/", opportunityController.findMany);
opportunityRouter.get("/:id", opportunityController.findOne);

opportunityRouter.patch("/:id",
   ValidateBody.execute(opportunityCreateSchema),
   opportunityController.update
);
opportunityRouter.delete("/:id", opportunityController.delete);

opportunityRouter.use("/", applicationRouter);
opportunityRouter.use("/:id", IsOpportunityIdValid.execute)