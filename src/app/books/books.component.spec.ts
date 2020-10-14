import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';


import { BooksComponent } from './books.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {ServiceService} from '../service.service';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatAutocompleteModule,
        MatSelectModule,
        HttpClientTestingModule,
        HttpClientModule
      ],
      declarations: [ BooksComponent ],
      providers: [ServiceService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should create`, inject([HttpTestingController, ServiceService],
    (httpClient: HttpTestingController, apiService: ServiceService) => {
      expect(apiService).toBeTruthy();
  }));
});
