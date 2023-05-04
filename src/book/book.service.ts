import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { book } from '@prisma/client';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { AuthorService } from 'src/author/author.service';
import { Author } from 'src/author/entities/author.eitity';
import { Args } from '@nestjs/graphql';

@Injectable()
export class BookService {

    constructor(private prisma: PrismaService, private authorService: AuthorService) {}

    findAll(): Promise<book[]> {
        return this.prisma.book.findMany();
    }

    findById(id: string): Promise<book> {
        return this.prisma.book.findFirst({
            where: { id: id }
        })
    }

    newBook(newBook: CreateBookInput): Promise<book> {
        return this.prisma.book.create({
            data: {
                title: newBook.title,
                genre: newBook.genre == null ? "" : newBook.genre,
                authorId: newBook.authorId
            }
        })
    }

    editBook(updateBook: UpdateBookInput): Promise<book> {
        return this.prisma.book.update({
            data: {
                title: updateBook.title,
                genre: updateBook.genre == null ? "" : updateBook.genre
            },
            where: {
                id: updateBook.id
            }
        })
    }
    
    findAuthor(@Args('authorId', {type: () => String}) authorId: string): Promise<Author> {
        return this.authorService.findById(authorId);
    }
}
