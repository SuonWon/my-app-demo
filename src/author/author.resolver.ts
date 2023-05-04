import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { Author } from './entities/author.eitity';

@Resolver(of => Author)
export class AuthorResolver {

    constructor(private authorService: AuthorService){}

    @Query(returns => [Author])
    getAuthors(): Promise<Author[]> {
        return this.authorService.findAll();
    }

    @Query(returns => Author)
    getAuthor(@Args('id', {type: () => String}) id: string): Promise<Author> {
        return this.authorService.findById(id);
    }

    @Mutation(returns => Author)
    createAuthor(@Args('createAuthorInput') createAuthor: CreateAuthorInput): Promise<Author> {
        return this.authorService.newAuthor(createAuthor);
    }
}
