import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type UserInterestUpdateInput = {
  event?: EventWhereUniqueInput | null;
  profile?: ProfileWhereUniqueInput | null;
};
