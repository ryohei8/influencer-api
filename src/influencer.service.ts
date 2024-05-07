import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Influencer, Prisma } from "@prisma/client";

@Injectable()
export class InfluencerService {
  constructor(private prisma: PrismaService) {}

  
}