/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { EventListRelationFilter } from "../../event/base/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { EnumProfileProfileType } from "./EnumProfileProfileType";
import { UserInterestListRelationFilter } from "../../userInterest/base/UserInterestListRelationFilter";

@InputType()
class ProfileWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  bio?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EventListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EventListRelationFilter)
  @IsOptional()
  @Field(() => EventListRelationFilter, {
    nullable: true,
  })
  events?: EventListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  profilePicture?: JsonFilter;

  @ApiProperty({
    required: false,
    enum: EnumProfileProfileType,
  })
  @IsEnum(EnumProfileProfileType)
  @IsOptional()
  @Field(() => EnumProfileProfileType, {
    nullable: true,
  })
  profileType?: "Option1";

  @ApiProperty({
    required: false,
    type: () => UserInterestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserInterestListRelationFilter)
  @IsOptional()
  @Field(() => UserInterestListRelationFilter, {
    nullable: true,
  })
  userInterests?: UserInterestListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  websiteLink?: StringNullableFilter;
}

export { ProfileWhereInput as ProfileWhereInput };
