import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Panel } from '../panel.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnChanges {
  // @Input() bookPrice: any;
  @Input() Discount: any;
  booksPrices: Array<any> = [];
  cartTotal = 0;
  offer = [];
  discount = 0;

  constructor(private panel: Panel) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.booksPrices = changes.Discount.currentValue[1];
    console.log(this.booksPrices);
    this.calcCartTotal(changes.Discount.currentValue[1]);
    this.calcOffer(changes.Discount.currentValue[0]);
  }

  calcCartTotal(changes: any): void {
    const bookItem = changes;
    this.panel.price = 0;
    bookItem.forEach(item => {
      this.panel.price += item.price;
      this.cartTotal = this.panel.price;
    });
  }

  calcOffer(offer: any): void {
    offer.forEach(element => {
      const type = element.type;
      switch (type) {
        case 'percentage':
          this.panel.percentage = this.panel.price - (this.cartTotal * element.value) / 100;
          console.log('It is a percentage.', this.panel.percentage);
          break;
        case 'minus':
          this.panel.minus = this.cartTotal - element.value;
          console.log('It is a minus.', this.panel.minus);
          break;
        case 'slice':
          this.panel.slice = this.cartTotal - element.value;
          console.log('It is a slice.', this.panel.slice);
          break;
      }
    });
    this.cidscount(this.panel.percentage, this.panel.minus, this.panel.slice);
  }

  cidscount(percentage, minus, slice): void {
    if (minus === undefined && slice === undefined) {
      this.discount = percentage;
    } else {
      this.discount = Math.min(percentage, minus, slice);
    }
  }
}
