import { UserInterest as TUserInterest } from "../api/userInterest/UserInterest";

export const USERINTEREST_TITLE_FIELD = "id";

export const UserInterestTitle = (record: TUserInterest): string => {
  return record.id?.toString() || String(record.id);
};
