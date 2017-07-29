import { Component } from '@angular/core';
import { Book } from './Book';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'RxJS';

import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'books-search.component.html'
})
export class BooksSearchComponent {
    title: string;
    books: Book[];

    constructor(private route: ActivatedRoute, private router: Router, private http: Http) {
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.title = params["title"];

            this.http.get("http://test.srikanthpragada.com/api/books")
                .map(resp => <Book[]>resp.json())
                .subscribe(resp => {
                    let books = <Book[]>resp;
                    // filter books
                    this.books = books.filter(b => b.Title.indexOf(this.title) >= 0);
                })
        });




    }


}