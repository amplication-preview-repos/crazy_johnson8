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
import { CourtWhereInput } from "./CourtWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CourtListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CourtWhereInput,
  })
  @ValidateNested()
  @Type(() => CourtWhereInput)
  @IsOptional()
  @Field(() => CourtWhereInput, {
    nullable: true,
  })
  every?: CourtWhereInput;

  @ApiProperty({
    required: false,
    type: () => CourtWhereInput,
  })
  @ValidateNested()
  @Type(() => CourtWhereInput)
  @IsOptional()
  @Field(() => CourtWhereInput, {
    nullable: true,
  })
  some?: CourtWhereInput;

  @ApiProperty({
    required: false,
    type: () => CourtWhereInput,
  })
  @ValidateNested()
  @Type(() => CourtWhereInput)
  @IsOptional()
  @Field(() => CourtWhereInput, {
    nullable: true,
  })
  none?: CourtWhereInput;
}
export { CourtListRelationFilter as CourtListRelationFilter };
