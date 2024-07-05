import { EventUpdateManyWithoutProfilesInput } from "./EventUpdateManyWithoutProfilesInput";
import { InputJsonValue } from "../../types";
import { UserInterestUpdateManyWithoutProfilesInput } from "./UserInterestUpdateManyWithoutProfilesInput";

export type ProfileUpdateInput = {
  bio?: string | null;
  email?: string | null;
  events?: EventUpdateManyWithoutProfilesInput;
  name?: string | null;
  profilePicture?: InputJsonValue;
  profileType?: "Option1" | null;
  userInterests?: UserInterestUpdateManyWithoutProfilesInput;
  websiteLink?: string | null;
};
