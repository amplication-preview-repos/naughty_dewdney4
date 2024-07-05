import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { UserInterestListRelationFilter } from "../userInterest/UserInterestListRelationFilter";

export type EventWhereInput = {
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  profile?: ProfileWhereUniqueInput;
  title?: StringNullableFilter;
  userInterests?: UserInterestListRelationFilter;
};
