import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';

@Module({
    providers: [AuthorService, AuthorResolver, PrismaService],
    exports: [AuthorService]
})
export class AuthorModule {}
