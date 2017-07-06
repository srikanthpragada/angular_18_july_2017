import { Component } from '@angular/core';
import { Book } from './Book';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
    selector: 'st-books',
    templateUrl: 'books.component.html'
})
export class BooksComponent {
    books: Book[];
    constructor(private http: Http) {

    }

    getBooks() {
        this.http.get("assets/books.json")
            .toPromise()
            .then(resp => this.books = <Book[]>resp.json())
    }

    getBooks2() {
        this.http.get("assets/books.json")
           .map (resp => <Book[]> resp.json())
           .subscribe( books => this.books = books);
    }
}