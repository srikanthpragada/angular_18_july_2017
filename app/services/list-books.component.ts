import { Component } from '@angular/core';
import { BooksService } from './books.service';   // 1
import { Book } from './book';

@Component({
    selector: 'st-books',
    templateUrl: './list-books.component.html',
    providers : [ BooksService ]   // 2
})
export class ListBooksComponent {
    books : Book[];

    constructor(private booksService : BooksService) {   // 3
        this.books = this.booksService.getBooks();  // 4
    }
   
    
}