import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Book } from "src/book/entities/book.entity";

@ObjectType()
export class Author {

    @Field({nullable: true})
    id: string

    @Field()
    name: string

    @Field(type => Int)
    age: Number

    @Field({nullable: true})
    email?: string

    @Field(() => Book, {nullable: true})
    books?: Book[]
}