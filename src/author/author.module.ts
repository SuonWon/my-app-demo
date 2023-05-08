import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';

@Module({
    providers: [AuthorService, AuthorResolver, PrismaService],
    exports: [AuthorService],
    controllers: [AuthorController]
})
export class AuthorModule {}
