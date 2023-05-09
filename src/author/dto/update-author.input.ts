import { Field, InputType, Int } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";


@InputType()
export class UpdateAuthorInput {

    @Field()
    id: string

    @Field({nullable: true})
    name?: string

    @Field(type => Int, {nullable: true})
    age?: number

    @Field({nullable: true})
    @IsEmail()
    email?: string
}