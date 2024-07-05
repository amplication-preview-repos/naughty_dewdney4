import { Profile } from "../profile/Profile";
import { UserInterest } from "../userInterest/UserInterest";

export type Event = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  location: string | null;
  profile?: Profile | null;
  title: string | null;
  updatedAt: Date;
  userInterests?: Array<UserInterest>;
};
