import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type UserInterestWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  profile?: ProfileWhereUniqueInput;
};
