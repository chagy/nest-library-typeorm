import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) { }

  @Post()
  createBook(@Body() body: CreateBookDto) {
    return this.bookService.create(body);
  }
}
