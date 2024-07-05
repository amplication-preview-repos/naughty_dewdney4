import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserInterestServiceBase } from "./base/userInterest.service.base";

@Injectable()
export class UserInterestService extends UserInterestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
