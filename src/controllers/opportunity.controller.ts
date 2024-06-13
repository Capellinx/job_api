import { Request, Response } from "express";
import { OpportunityServices } from "../services";

export class OpportunityControllers {
   private opportunityServices = new OpportunityServices()

   create = async (req: Request, res: Response) => {
      const response = await this.opportunityServices.create(req.body);

      return res.status(201).json(response);
   };

   findMany = async (req: Request, res: Response) => {
      const response = await this.opportunityServices.findMany();

      return res.status(200).json(response);
   };

   findOne = async (req: Request, res: Response) => {
      const response = await this.opportunityServices.findOne(Number(req.params.id));

      return res.status(200).json(response);
   };

   update = async (req: Request, res: Response) => {
      const response = await this.opportunityServices.update(Number(req.params.id), req.body);

      return res.status(200).json(response);
   };

   delete = async (req: Request, res: Response) => {
      await this.opportunityServices.delete(Number(req.params.id));

      return res.status(204).json();
   };
};
