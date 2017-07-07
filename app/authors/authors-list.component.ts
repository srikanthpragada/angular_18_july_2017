import { Component } from '@angular/core';
import { Author }  from "./Author";

@Component({
  templateUrl : 'authors-list.component.html'
})
export class AuthorsListComponent   { 
  
     authors : Author [] ;
     
     
     ngOnInit() {
       this.authors = Author.getAuthors();
     }
   
      
  
}


 