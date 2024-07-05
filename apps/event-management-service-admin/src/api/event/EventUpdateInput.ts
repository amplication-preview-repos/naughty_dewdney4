import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { UserInterestUpdateManyWithoutEventsInput } from "./UserInterestUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  profile?: ProfileWhereUniqueInput | null;
  title?: string | null;
  userInterests?: UserInterestUpdateManyWithoutEventsInput;
};
