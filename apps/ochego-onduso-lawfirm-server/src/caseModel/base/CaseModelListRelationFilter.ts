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
import { CaseModelWhereInput } from "./CaseModelWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CaseModelListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CaseModelWhereInput,
  })
  @ValidateNested()
  @Type(() => CaseModelWhereInput)
  @IsOptional()
  @Field(() => CaseModelWhereInput, {
    nullable: true,
  })
  every?: CaseModelWhereInput;

  @ApiProperty({
    required: false,
    type: () => CaseModelWhereInput,
  })
  @ValidateNested()
  @Type(() => CaseModelWhereInput)
  @IsOptional()
  @Field(() => CaseModelWhereInput, {
    nullable: true,
  })
  some?: CaseModelWhereInput;

  @ApiProperty({
    required: false,
    type: () => CaseModelWhereInput,
  })
  @ValidateNested()
  @Type(() => CaseModelWhereInput)
  @IsOptional()
  @Field(() => CaseModelWhereInput, {
    nullable: true,
  })
  none?: CaseModelWhereInput;
}
export { CaseModelListRelationFilter as CaseModelListRelationFilter };
