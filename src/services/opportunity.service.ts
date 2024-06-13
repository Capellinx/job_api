import { prisma } from "../../prisma/prisma";
import { TOpportunity, TopportunityCreate } from "../schemas";

export class OpportunityServices {
   async create(body: TopportunityCreate): Promise<TOpportunity> {
      const data = await prisma.oppotunity.create({ data: body });

      return data;
   };
   async findMany() {

   };
   async findOne() {

   };
   async update() {

   };
   async delete() {

   };
}
