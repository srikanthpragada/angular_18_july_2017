import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListBooksComponent} from "app/services/list-books.component";
import { BookDetailsComponent} from "app/services/book-details.component";
import { LoginComponent} from "app/forms/login.component";

@NgModule({
  declarations: [
          ListBooksComponent,BookDetailsComponent, LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ LoginComponent ]
})
export class AppModule {

   
}
