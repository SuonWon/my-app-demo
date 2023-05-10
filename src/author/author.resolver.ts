import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './entities/author.eitity';

@Resolver(of => Author)
export class AuthorResolver {

    constructor(private authorService: AuthorService){}

    @Query(returns => [Author])
    getAuthors(): Promise<Author[]> {
        const data = this.authorService.findAll();
        return data;
    }

    @Query(returns => Author)
    getAuthor(@Args('id', {type: () => String}) id: string): Promise<Author> {
        return this.authorService.findById(id);
    }

    @Mutation(returns => Author)
    createAuthor(@Args('createAuthorInput') createAuthor: CreateAuthorInput): Promise<Author> {
        return this.authorService.newAuthor(createAuthor);
    }

    @Mutation(returns => Author)
    updateAuthor(@Args('updateAuthorInput') updateAuthor: UpdateAuthorInput) : Promise<Author> {
        return this.authorService.editAuthor(updateAuthor);
    }

    @Mutation(returns => Author)
    deleteAuthor(@Args('id', {type: () => String}) id: string): Promise<Author> {
        return this.authorService.deleteAuthor(id);
    }
}
