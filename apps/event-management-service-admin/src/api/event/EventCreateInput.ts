import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { UserInterestCreateNestedManyWithoutEventsInput } from "./UserInterestCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  profile?: ProfileWhereUniqueInput | null;
  title?: string | null;
  userInterests?: UserInterestCreateNestedManyWithoutEventsInput;
};
