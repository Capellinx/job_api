import { prisma } from "../../prisma/prisma";
import { TOpportunity, TopportunityCreate, TOpportunityUpdate } from "../schemas";
export class OpportunityServices {
   async create(body: TopportunityCreate): Promise<TOpportunity> {
      const data = await prisma.oppotunity.create({ data: body });

      return data;
   };

   async findMany(): Promise<TOpportunity[]> {
      const data = await prisma.oppotunity.findMany({ include: { Application: true } });
      return data;
   };

   findOne(opportunity: TOpportunity): TOpportunity {
      return opportunity;
   };

   async update(id: number, body: TOpportunityUpdate): Promise<TOpportunity> {
      const data = await prisma.oppotunity.update({ where: { id }, data: body });

      return data;
   };

   async delete(id: number): Promise<void> {
      await prisma.oppotunity.delete({ where: { id } })
   };
}
