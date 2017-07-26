import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book';

@Component({
    selector: 'book-details',
    templateUrl: './book-details.component.html'
})
export class BookDetailsComponent  {
    @Input() book : Book;
    @Output() delete = new EventEmitter<number>();

    constructor() { }

    deleteBook() {
         this.delete.emit(this.book.id);
    }
}