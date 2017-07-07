import { Component, Input } from '@angular/core';
import { Author } from './Author';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  template : `<h2>Author has been deleted! </h2>
  <p></p>
  <button (click)="continue()">Continue</button>
  `
})
export class DeleteAuthorComponent {
  id : number;

  constructor(private route: ActivatedRoute, private router : Router) { 
  }


  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id =  params["id"];
      this.deleteAuthor(params["id"])

     });
  }
 

  deleteAuthor(id : number) 
  {
    let authors = Author.getAuthors(); 
    for (var idx in Author.getAuthors()) {
      let a = authors[idx];
      if ( a.id == id)
       {
           authors.splice(parseInt(idx),1);
           return;
       }
    }
  }

  
   continue() {
        this.router.navigate( ['list']);
    
  }
}