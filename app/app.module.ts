import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BracketsPipe } from 'app/directives/brackets.pipe';
import { ReactiveLoginComponent } from 'app/forms/reactive-login.component';
import { PipesDemoComponent } from 'app/directives/pipesdemo.component';

import { BooksComponent } from 'app/http/books.component';
import { CountriesComponent} from 'app/http/countries.component';
import { AddBookComponent } from 'app/books/add-book.component';

@NgModule({
  declarations: [
      ReactiveLoginComponent, AddBookComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ AddBookComponent ]
})
export class AppModule { }
