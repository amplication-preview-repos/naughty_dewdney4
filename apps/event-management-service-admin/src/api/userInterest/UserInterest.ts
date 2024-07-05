import { Event } from "../event/Event";
import { Profile } from "../profile/Profile";

export type UserInterest = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  profile?: Profile | null;
  updatedAt: Date;
};
