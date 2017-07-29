import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListBooksComponent} from "app/services/list-books.component";
import { BookDetailsComponent} from "app/services/book-details.component";
import { LoginComponent} from "app/forms/login.component";
import { ReactiveLoginComponent} from "app/forms/reactive-login.component";
import { BooksComponent} from "app/http/books.component";
import { Books2Component} from "app/http/books2.component";
import { Books3Component} from "app/http/books3.component";
import { HttpGitComponent} from "app/http/httpgit.component";

import { BooksService} from "app/http/books.service";

import { AddBookComponent } from "app/http/add-book.component";


@NgModule({
  declarations: [
          ListBooksComponent,BookDetailsComponent,
          LoginComponent, ReactiveLoginComponent, BooksComponent,
          Books2Component, HttpGitComponent,Books3Component,
          AddBookComponent
         
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule
  ],
  providers: [BooksService],
  bootstrap: [AddBookComponent  ]
})
export class AppModule {

   
}