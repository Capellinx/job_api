import { NextFunction, Request, Response } from "express";
import { prisma } from "../../prisma/prisma";
import { AppError } from "../errors";

export class IsOpportunityIdValid {
   static async execute(req: Request, res: Response, next: NextFunction) {
      const id = Number(req.params.id);

      const opporunity = await prisma.oppotunity.findFirst({ where: { id } });

      if (!opporunity) {
         throw new AppError("Opportunity not found", 404);
      }

      res.locals.opporunity = opporunity;

      return next();
   }
}