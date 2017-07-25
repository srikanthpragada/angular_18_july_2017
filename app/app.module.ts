import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListBooksComponent} from "app/services/list-books.component";
import { BookDetailsComponent} from "app/services/book-details.component";

@NgModule({
  declarations: [
          ListBooksComponent,BookDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ ListBooksComponent ]
})
export class AppModule {

   
}
