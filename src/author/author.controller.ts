import { Controller, Get, Param } from '@nestjs/common';
import { AuthorService } from './author.service';

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
}
