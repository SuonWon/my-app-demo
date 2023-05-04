import { Field, ObjectType } from "@nestjs/graphql";
import { Author } from "src/author/entities/author.eitity";

@ObjectType()
export class Book {

    @Field({nullable: true})
    id: String

    @Field()
    title: String;

    @Field({nullable: true})
    genre: String;

    @Field()
    authorId: String;

    // @Field(type => Author)
    // author?: Author;
}