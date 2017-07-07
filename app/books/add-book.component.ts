import { Component } from '@angular/core';
import { Book } from './Book';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';


@Component({
    selector: 'st-books',
    templateUrl: 'add-book.component.html'
})
export class AddBookComponent {
    book : Book;
    done  : boolean = false; 
    added : boolean = false; 
    message : string = "";

    constructor(private http: Http) {
      this.book = new Book();
    }

    addBook()  {
         // call service 
          this.done = false; 
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers : headers });
          this.added = false; 
          this.http.post("http://test.srikanthpragada.com/api/books", this.book ,options)
            .map( (resp:Response) => {return resp})
            .finally( () => { this.done = true;})
            .catch(this.handleError)
            .subscribe(result => {
                 console.log("Added Book");
                 this.added = true;
            });
    }

   handleError(response) 
   {
       console.log(response);
      //  this.message = response.statusText;
       return Observable.throw(response.statusText);
   }

}