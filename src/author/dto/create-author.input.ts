import { Field, InputType, Int } from "@nestjs/graphql";
import { isEmail, IsEmail, IsEmpty, IsNotEmpty } from "class-validator";


@InputType()
export class CreateAuthorInput {

    @Field()
    @IsNotEmpty()
    name: string

    @Field(type => Int)
    @IsNotEmpty()
    age: number

    @Field({nullable: true})
    @IsEmail()
    email?: string
}