import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';

@Controller()
export class AuthorController {
    constructor(private readonly authorService: AuthorService){}

    @Get('authors')
    showAllAuthors() {
        return this.authorService.findAll();
    }

    @Get('author/:id')
    showAuthor(@Param('id') id: string) {
        return this.authorService.findById(id);
    }

    @Post('author/add')
    addAuthor(@Body() author: CreateAuthorInput) {
        this.authorService.newAuthor(author);
    }

    @Post('author/update')
    editAuthor(@Body() author: UpdateAuthorInput) {
        this.authorService.editAuthor(author);
    }
}
