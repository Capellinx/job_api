import { Request, Response } from "express";
import { ApplicationServices } from "../services";

export class ApplicationController {
   private applicationService = new ApplicationServices()

   create = async (req: Request, res: Response) => {
      const response = await this.applicationService.create(Number(req.params.id), req.body);

      return res.status(201).json(response)
   };

   findMany = async (req: Request, res: Response) => {
      const response = await this.applicationService.findMany(Number(req.params.id));

      return res.status(200).json(response)
   };
};
