import { Module } from '@nestjs/common';
import { AuthorModule } from 'src/author/author.module';
import { PrismaService } from 'src/prisma.service';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
    imports: [AuthorModule],
    providers: [BookService, BookResolver, PrismaService],
    controllers: [BookController]
})
export class BookModule {}
