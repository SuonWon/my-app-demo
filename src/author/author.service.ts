import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { author } from '@prisma/client';
import { CreateAuthorInput } from './dto/create-author.input';

@Injectable()
export class AuthorService {

    constructor(private prisma: PrismaService){}

    findAll(): Promise<author[]> {
        return this.prisma.author.findMany({
            include: {
                books: true
            }
        });
    }

    findById(id: string): Promise<author> {
        return this.prisma.author.findUnique({
            where: {id: id},
            include: {
                books: true 
            }
        });
    }

    newAuthor(newAuthor: CreateAuthorInput): Promise<author> {
        return this.prisma.author.create({
            data: {
                name: newAuthor.name,
                age: Number(newAuthor.age),
                email: newAuthor.email == null ? "" : newAuthor.email
            }
        })
    }

}
