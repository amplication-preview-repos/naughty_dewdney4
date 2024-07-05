import { Event } from "../event/Event";
import { JsonValue } from "type-fest";
import { UserInterest } from "../userInterest/UserInterest";

export type Profile = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  id: string;
  name: string | null;
  profilePicture: JsonValue;
  profileType?: "Option1" | null;
  updatedAt: Date;
  userInterests?: Array<UserInterest>;
  websiteLink: string | null;
};
