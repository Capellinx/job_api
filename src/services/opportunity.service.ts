import { prisma } from "../../prisma/prisma";
import { TOpportunity, TopportunityCreate } from "../schemas";
export class OpportunityServices {
   async create(body: TopportunityCreate): Promise<TOpportunity> {
      const data = await prisma.oppotunity.create({ data: body });

      return data;
   };

   async findMany(): Promise<TOpportunity[]> {
      const data = await prisma.oppotunity.findMany();
      
      return data;
   };

   async findOne(id: number): Promise<TOpportunity> {
      const data = await prisma.oppotunity.findUnique({ where: { id: id } });

      return data as TOpportunity;
   };

   async update() {

   };

   async delete() {

   };
}
