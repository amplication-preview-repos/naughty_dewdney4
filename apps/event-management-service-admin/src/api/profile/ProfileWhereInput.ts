import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserInterestListRelationFilter } from "../userInterest/UserInterestListRelationFilter";

export type ProfileWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  events?: EventListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  profilePicture?: JsonFilter;
  profileType?: "Option1";
  userInterests?: UserInterestListRelationFilter;
  websiteLink?: StringNullableFilter;
};
