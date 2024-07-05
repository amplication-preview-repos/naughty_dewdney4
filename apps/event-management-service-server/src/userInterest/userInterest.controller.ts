import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserInterestService } from "./userInterest.service";
import { UserInterestControllerBase } from "./base/userInterest.controller.base";

@swagger.ApiTags("userInterests")
@common.Controller("userInterests")
export class UserInterestController extends UserInterestControllerBase {
  constructor(
    protected readonly service: UserInterestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
