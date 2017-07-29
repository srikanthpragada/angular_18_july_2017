import { Component, Input } from '@angular/core';
import { Book } from './Book';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Http, Response, Headers ,  RequestOptions} from '@angular/http';


@Component({
  template : `<h2>Book has been deleted! </h2>
  <p></p>
  <button (click)="continue()">Continue</button>
  `
})
export class DeleteBookComponent {
  id : number;

  constructor(private route: ActivatedRoute, private router : Router, private http : Http) { 
  }


  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id =  params["id"];

        this.http.delete("http://test.srikanthpragada.com/api/books/" + this.id)
            .map( resp  => {return resp})
            .subscribe(result => {
                  
            });
  
     });
  }
 
 
  
   continue() {
        this.router.navigate( ['list']);
    
  }
}