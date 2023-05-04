import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateBookInput {

    @Field()
    @IsNotEmpty()
    title: string;

    @Field({nullable: true})
    genre: string

    @Field()
    authorId: string
}