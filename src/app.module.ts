import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookService } from './book/book.service';
import { BookResolver } from './book/book.resolver';
import { BookModule } from './book/book.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { PrismaService } from './prisma.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthorService } from './author/author.service';
import { AuthorResolver } from './author/author.resolver';
import { AuthorModule } from './author/author.module';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';


@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    BookModule,
    AuthorModule
  ],
  //controllers: [AppController],
  providers: [AppService, BookService, BookResolver, PrismaService, AuthorService, AuthorResolver, {
    provide: APP_GUARD,
    useClass: AuthGuard
  }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes('*');
    // forRoutes({ path: '/path', method: RequestMethod.GET });
  }
}
