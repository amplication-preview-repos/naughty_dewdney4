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
import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { ProfileWhereUniqueInput } from "../../profile/base/ProfileWhereUniqueInput";
import { UserInterestUpdateManyWithoutEventsInput } from "./UserInterestUpdateManyWithoutEventsInput";

@InputType()
class EventUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => ProfileWhereUniqueInput, {
    nullable: true,
  })
  profile?: ProfileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserInterestUpdateManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => UserInterestUpdateManyWithoutEventsInput)
  @IsOptional()
  @Field(() => UserInterestUpdateManyWithoutEventsInput, {
    nullable: true,
  })
  userInterests?: UserInterestUpdateManyWithoutEventsInput;
}

export { EventUpdateInput as EventUpdateInput };
