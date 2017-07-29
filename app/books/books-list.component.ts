import { Component } from '@angular/core';
import { Book } from './Book';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Http, Response, Headers ,  RequestOptions} from '@angular/http';
import { Observable } from 'RxJS'; 

import 'rxjs/add/operator/toPromise';

@Component({
    templateUrl: 'books-list.component.html'
})
export class BooksListComponent {

    books: Book[];

    constructor(private http: Http, private router : Router) {

    }

    ngOnInit() {
        this.http.get("http://test.srikanthpragada.com/api/books")
            .toPromise()
            .then(resp => this.books = <Book[]>resp.json())
    }
     
    deleteBook(id : number) {
       if (confirm("Do you want to delete book?"))
           this.router.navigate( ['delete',id]);
    } 



}