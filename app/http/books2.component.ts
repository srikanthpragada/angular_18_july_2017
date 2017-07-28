import { Component, OnInit } from '@angular/core';
import { Book } from './Book';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
    selector: 'st-books',
    templateUrl: './books.component.html'
})
export class Books2Component implements OnInit{

    books: Book[];

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.http.get("/assets/books.json")
            .map(resp => <Book[]> resp.json())
            .subscribe ( resp => this.books = resp);
    }


}