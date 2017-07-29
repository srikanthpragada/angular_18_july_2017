import { Component, OnInit } from '@angular/core';
import { Book } from './Book';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'st-books',
    templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit{

    books: Book[];

    constructor(private http: Http) {

    }

    ngOnInit() {
        

    }


}