import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql';
import { Author } from 'src/author/entities/author.eitity';
import { BookService } from './book.service';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './entities/book.entity';

@Resolver(of => Book)
export class BookResolver {

    constructor(private bookService: BookService) {}

    @Query(returns => [Book])
    getBooks(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Query(returns => Book) 
    getBook(@Args('id', {type: () => String}) id: string): Promise<Book> {
        return this.bookService.findById(id);
    }

    @ResolveField(returns => Author) 
    getAuthor(@Parent() book: Book): Promise<Author> {
        return this.bookService.findAuthor(book.authorId.toString());
    }

    @Mutation(returns => Book)
    createBook(@Args('createBookInput') createBook: CreateBookInput) : Promise<Book> {
        return this.bookService.newBook(createBook);
    }

    @Mutation(returns => Book)
    updateBook(@Args('updateBookInput') updateBook: UpdateBookInput) : Promise<Book> {
        return this.bookService.editBook(updateBook);
    }

    @Mutation(returns => Book)
    deleteBook(@Args('id', {type: () => String}) id: string): Promise<Book> {
        return this.bookService.deleteBook(id);
    }
}
