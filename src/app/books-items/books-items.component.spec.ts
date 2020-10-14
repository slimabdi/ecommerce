import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {By} from '@angular/platform-browser';

import { BooksItemsComponent } from './books-items.component';
import {ServiceService} from '../service.service';
import {SearchPipe} from '../search.pipe';
import {Book} from '../book';

describe('BooksItemsComponent', () => {
  let component: BooksItemsComponent;
  let fixture: ComponentFixture<BooksItemsComponent>;
  const bookItem: Book = {
  isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
  title: 'Henri Potier à l\'école des sorciers',
  price: 35,
  cover: 'http://henri-potier.xebia.fr/hp0.jpg',
  synopsis:
    'Pour faire face au retour de Voldemort, les membres de l\'Ordre du phénix, sous la direction d\'Albus Dumbledore, sont rassemblés au 12, Square Grimmaurd à Londres, leur quartier général. Le ministre de la magie ne croit pas au retour de Voldemort. La gazette du sorcier contribue à répandre ses idées, notamment en sous-entendant que Henri est un menteur ou que Dumbledore perd la raison.',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule
      ],
      declarations: [ BooksItemsComponent,
        SearchPipe
      ],
      providers: [
        ServiceService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should create book list `, inject([HttpTestingController, ServiceService],
    (httpClient: HttpTestingController, apiService: ServiceService) => {
      apiService.addBookToCart(bookItem);
      expect(apiService).toBeTruthy();
  }));

/*   it('should keep input and h2 in sync', () => {
    const inputDe = fixture.debugElement.query(By.css('input[name="searchBook"]'));
    console.log(inputDe)
    const inputEl = inputDe.nativeElement;
    inputEl.value = 'Updated Task 1';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  }); */

  it('should show TEST INPUT', () => {
    component.booktList = [{
      isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
      title: 'Henri Potier à l\'école des sorciers',
      price: 35,
      cover: 'http://henri-potier.xebia.fr/hp0.jpg',
      synopsis:
        'Pour faire face au retour de Voldemort, les membres de l\'Ordre du phénix, sous la direction d\'Albus Dumbledore, sont rassemblés au 12, Square Grimmaurd à Londres, leur quartier général. Le ministre de la magie ne croit pas au retour de Voldemort. La gazette du sorcier contribue à répandre ses idées, notamment en sous-entendant que Henri est un menteur ou que Dumbledore perd la raison.',
      }];
    component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').innerText).toEqual('');
  });

});
