import { Component, Input } from '@angular/core';
import { Author } from './Author';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  templateUrl: 'author-details.component.html'
})
export class AuthorDetailsComponent {
  author: Author;
  id : number;

  constructor(private route: ActivatedRoute, private router : Router) { 
  }


  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id =  params["id"];
      this.author = this.getAuthor(params["id"])
     });
  }
    
/*
 ngOnInit(): void {
      // this.id = this.route.snapshot.params["id"];
      this.route.paramMap
      this.author = this.getAuthor(this.id);
  }

*/

  getAuthor(id : number) : Author
  {
    // console.log("Route id : " + id);
    for (var a of Author.getAuthors()) {
      if (a.id == id) {
        return a;
      }
    }
  }

  next() {
    console.log("About to go to next author");
    
    this.router.navigate( ['details', + this.id + 1])
        .catch(error=> console.log(error))
        .then( e => console.log("Next Done " + e));
    // this.router.navigate( ["list"]);
  }

   back() {
    
    this.router.navigate( ['list']);
    
  }
}