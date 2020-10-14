import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Book } from '../book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  booktList: Book[] = [];

  constructor(private bookService: ServiceService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks = () => {
    this.bookService.getBooks().subscribe(books => {
      console.log(books),
      this.booktList = books;
    });
  }

}
