import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class UpdateBookInput {

    @Field()
    id: string

    @Field({nullable: true})
    title?: string;

    @Field({nullable: true})
    genre?: string

    @Field({nullable: true})
    authorId?: string
}