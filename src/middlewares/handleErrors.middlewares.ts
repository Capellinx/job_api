import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors";

export class HandleErrors {
   static execute(error: Error, req: Request, res: Response, next: NextFunction) {
      if (error instanceof AppError) {
         return res.status(error.statusCode).json({ message: error.message })
      }

      if (error instanceof ZodError) {
         return res.status(422).json({ message: error.message })
      }

      console.log(`Aqui deu o ERRO => ${error}`);

      return res.status(500).json({ message: "Internal Server Error!" })
   }
}