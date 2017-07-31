import { Component, OnInit } from '@angular/core';
import { Book } from '../http/Book';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit{

    books: Book[];

    constructor(private http: Http) {
    }

    ngOnInit() {
         this.http.get("/assets/books.json")
         .toPromise()
         .then( resp => this.books = <Book[]> resp.json());
    }


}