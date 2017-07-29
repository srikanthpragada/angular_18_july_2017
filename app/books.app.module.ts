import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { BooksListComponent } from 'app/books/books-list.component';
import { BookUpdateComponent } from 'app/books/book-update.component';

import { MainComponent } from 'app/books/main.component';
import { AddBookComponent } from 'app/books/add-book.component';
import { DeleteBookComponent } from 'app/books/delete-book.component';
import { BooksSearchComponent } from 'app/books/books-search.component';
 
const appRoutes: Routes = [
  { path: 'add', component: AddBookComponent },
  { path: 'list', component: BooksListComponent },
  { path: 'delete/:id', component: DeleteBookComponent },
  { path: 'update/:id', component:  BookUpdateComponent },
  { path: 'search/:title', component:  BooksSearchComponent },
  { path: '**',  redirectTo : "/list", pathMatch : 'full' }
];


@NgModule({
  declarations: [
      BooksListComponent,
      AddBookComponent,
      MainComponent,
      BookUpdateComponent,
      DeleteBookComponent,
      BooksSearchComponent
       
  ],
  imports: [
    BrowserModule, FormsModule,  HttpModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ MainComponent]
})
export class AppModule {

   
 }
