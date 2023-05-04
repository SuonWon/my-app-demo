import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class UpdateBookInput {

    @Field()
    id: string

    @Field()
    @IsNotEmpty()
    title: string;

    @Field({nullable: true})
    genre: string
}