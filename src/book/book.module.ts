import { Module } from '@nestjs/common';
import { AuthorModule } from 'src/author/author.module';
import { PrismaService } from 'src/prisma.service';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';

@Module({
    imports: [AuthorModule],
    providers: [BookService, BookResolver, PrismaService]
})
export class BookModule {}
