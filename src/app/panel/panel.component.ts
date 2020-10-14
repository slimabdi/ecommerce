import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ServiceService } from '../service.service';
import { Subscription } from 'rxjs';

import { Book } from '../book';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  subscription: Subscription;
  booksId = [];
  booksPrices: Array<any> = [];
  Offers: Array<any>;
  offersExist = 0;
  Discount = [];

  constructor(private panelService: ServiceService, public bookPrice: Book) {}

  ngOnInit(): void {
    this.subscription = this.panelService.getBookToCart().subscribe(book => {
      if (book) {
        this.bookPrice.isbn = Object.getOwnPropertyDescriptor(book, 'isbn').value;
       // this.bookPrice.price = Object.getOwnPropertyDescriptor(book, 'price').value;
        this.booksPrices = [book, ...this.booksPrices];
        this.booksId = [this.bookPrice.isbn, ...this.booksId];
        this.panelService.showPromotion(this.booksId.join()).subscribe(res => {
          this.Offers = res;
          this.offersExist = this.Offers['offers'].length;
          this.Discount = [this.Offers['offers'], this.booksPrices];
        });
      } else {
        // clear bookId when empty object book received
        this.booksId = [];
      }
    });
  }

  trackByFn(i: any, item: any): void {}


}
