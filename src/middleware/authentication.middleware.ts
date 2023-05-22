import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { BookService } from "src/book/book.service";

Injectable()
export class AuthenticationMiddleware implements NestMiddleware {

    private readonly logger = new Logger(AuthenticationMiddleware.name);

    use(req: Request, res: Response, next: NextFunction) {
        this.logger.log(AuthenticationMiddleware.name);
        next();
    }
}