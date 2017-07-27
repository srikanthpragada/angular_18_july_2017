import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListBooksComponent} from "app/services/list-books.component";
import { BookDetailsComponent} from "app/services/book-details.component";
import { LoginComponent} from "app/forms/login.component";
import { ReactiveLoginComponent} from "app/forms/reactive-login.component";


@NgModule({
  declarations: [
          ListBooksComponent,BookDetailsComponent,
          LoginComponent, ReactiveLoginComponent
          
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ ReactiveLoginComponent ]
})
export class AppModule {

   
}
