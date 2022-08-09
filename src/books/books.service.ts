import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private repo: Repository<Book>
  ) { }

  create(book): Promise<Book> {
    const bookObj = this.repo.create({
      name: book.name,
      price: book.price,
      author: book.author
    })

    return this.repo.save(bookObj);
  }
}
