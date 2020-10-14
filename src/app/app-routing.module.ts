import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { PanelComponent } from './panel/panel.component';
const routes: Routes = [
  {
    path: '', component: BooksComponent
  },
  {
    path: 'panel', component: PanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
