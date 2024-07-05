import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserInterestModuleBase } from "./base/userInterest.module.base";
import { UserInterestService } from "./userInterest.service";
import { UserInterestController } from "./userInterest.controller";
import { UserInterestResolver } from "./userInterest.resolver";

@Module({
  imports: [UserInterestModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserInterestController],
  providers: [UserInterestService, UserInterestResolver],
  exports: [UserInterestService],
})
export class UserInterestModule {}
