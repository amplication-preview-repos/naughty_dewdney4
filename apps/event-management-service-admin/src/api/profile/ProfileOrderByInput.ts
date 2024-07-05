import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  profilePicture?: SortOrder;
  profileType?: SortOrder;
  updatedAt?: SortOrder;
  websiteLink?: SortOrder;
};
