import { Component, Input } from '@angular/core';
import { Book } from './Book';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Http, Response, Headers ,  RequestOptions} from '@angular/http';
import { Observable } from 'RxJS';

@Component({
  templateUrl: 'book-update.component.html'
})
export class BookUpdateComponent {
  id: number;
  book : Book;
  constructor(private route: ActivatedRoute, private router : Router, private http:Http) { 
  }


  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id =  params["id"];
    });

     // get book details 
     this.http.get("http://test.srikanthpragada.com/api/books/" + this.id)
            .map( resp => { return <Book> resp.json(); } )
            .subscribe( resp => this.book = resp);
  }

  updateBook() 
  {
          // call service 
          
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
         
          this.http.put("http://test.srikanthpragada.com/api/books/" + this.book.Id, this.book ,options)
            .map( resp  => {return resp})
            .catch(this.handleError)
            .subscribe(result => {
                  alert("Book Updated!");
            });
    }

   handleError(response) 
   {
       console.log(response);
       alert("Sorry! Book could not be updated!");
       return Observable.throw(response.statusText);
   }
   
}   