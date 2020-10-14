import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import {environment} from '../environments/environment';

import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  subject = new Subject();

  constructor(private http: HttpClient) {}

  getBooks = (): Observable<Book[]> => {
    return this.http.get<Book[]>(environment.baseUrl).pipe(map(res => res));
  }

  addBookToCart = (book: Book) => {
    this.subject.next(book);
    this.getBookToCart();
  }

  getBookToCart = () => {
    return this.subject.asObservable();
  }

  showPromotion = (idIbn: any): Observable<any> => {
    return this.http.get(environment.baseUrl + '/' + idIbn + '/commercialOffers').pipe(map(res => res));

  }
}
