import { EventCreateNestedManyWithoutProfilesInput } from "./EventCreateNestedManyWithoutProfilesInput";
import { InputJsonValue } from "../../types";
import { UserInterestCreateNestedManyWithoutProfilesInput } from "./UserInterestCreateNestedManyWithoutProfilesInput";

export type ProfileCreateInput = {
  bio?: string | null;
  email?: string | null;
  events?: EventCreateNestedManyWithoutProfilesInput;
  name?: string | null;
  profilePicture?: InputJsonValue;
  profileType?: "Option1" | null;
  userInterests?: UserInterestCreateNestedManyWithoutProfilesInput;
  websiteLink?: string | null;
};
