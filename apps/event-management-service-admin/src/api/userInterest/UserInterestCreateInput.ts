import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type UserInterestCreateInput = {
  event?: EventWhereUniqueInput | null;
  profile?: ProfileWhereUniqueInput | null;
};
