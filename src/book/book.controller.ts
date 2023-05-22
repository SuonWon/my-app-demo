import { Controller, Get, Logger, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { BookService } from './book.service';

@Controller()
export class BookController {

    private readonly logger = new Logger(AppService.name);

    constructor(private readonly bookservice: BookService) {}

    @Get('books')
    //@UseGuards(AuthGuard) **Use for specific guard 
    showAllBooks() {
        const books = this.bookservice.findAll();
        books.then(rec => {
            rec.map(rec => {
                this.logger.log(rec);
            })
        })
        return books;
    }

    @Get('book/:id') 
    showBook(@Param('id') id: string) {
        return this.bookservice.findById(id);
    }
}