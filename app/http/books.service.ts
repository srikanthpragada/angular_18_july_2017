import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import { Book } from './Book';
import { WebBook } from './webbook';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {
   constructor(private http : Http) {

   }
   getBooks() : Observable<Book[]> {
      return this.http.get("/assets/books.json")
                 .map(resp =>  <Book[]> resp.json());
   }

   getWebBooks() : Observable<WebBook[]> {
      return this.http.get("http://test.srikanthpragada.com/api/books")
                 .map(resp =>  <WebBook[]> resp.json());
   }
   
}