import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "name";

export const ProfileTitle = (record: TProfile): string => {
  return record.name?.toString() || String(record.id);
};
