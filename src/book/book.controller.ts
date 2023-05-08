import { Controller, Get, Param } from '@nestjs/common';
import { BookService } from './book.service';

@Controller()
export class BookController {

    constructor(private readonly bookservice: BookService) {}

    @Get('books') 
    showAllBooks() {
        return this.bookservice.findAll();
    }

    @Get('book/:id') 
    showBook(@Param('id') id: string) {
        return this.bookservice.findById(id);
    }
}