import { Request, Response } from "express";
import { OpportunityServices } from "../services";

export class OpportunityControllers {
   private opportunityServices = new OpportunityServices()

   create = async (req: Request, res: Response) => {
      const response = await this.opportunityServices.create(req.body);

      return res.status(201).json(response);
   };

   findMany = async (req: Request, res: Response) => {
   };

   async findOne(req: Request, res: Response) {

   };

   async update(req: Request, res: Response) {

   };

   async delete(req: Request, res: Response) {

   };
};
