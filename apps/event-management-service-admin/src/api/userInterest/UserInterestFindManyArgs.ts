import { UserInterestWhereInput } from "./UserInterestWhereInput";
import { UserInterestOrderByInput } from "./UserInterestOrderByInput";

export type UserInterestFindManyArgs = {
  where?: UserInterestWhereInput;
  orderBy?: Array<UserInterestOrderByInput>;
  skip?: number;
  take?: number;
};
