import { Field, InputType, Int } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";


@InputType()
export class UpdateAuthorInput {

    @Field()
    id: string

    @Field()
    @IsNotEmpty()
    name: string

    @Field(type => Int)
    @IsNotEmpty()
    age: number

    @Field({nullable: true})
    @IsEmail()
    email: string
}