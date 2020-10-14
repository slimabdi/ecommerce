import { Component, OnInit, Input } from '@angular/core';

import { ServiceService } from '../service.service';
import { Book } from '../book';

@Component({
  selector: 'app-books-items',
  templateUrl: './books-items.component.html',
  styleUrls: ['./books-items.component.scss']
})
export class BooksItemsComponent implements OnInit {

  @Input() booktList: Book[];
  searchBook = '';
  expandedIndex = -1;

  constructor(private cartService: ServiceService) { }

  ngOnInit(): void {
    console.log(this.booktList);
  }

  handleAddToCart = (bookItem) => {
    this.cartService.addBookToCart(bookItem);
  }

  Collaps(index: number): void {
    this.expandedIndex = index === this.expandedIndex ? -1 : index;
  }

}
