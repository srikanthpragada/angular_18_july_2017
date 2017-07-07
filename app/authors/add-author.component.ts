import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from './Author';
@Component({
    templateUrl: 'add-author.component.html'
})
export class AddAuthorComponent {
    name: string;
    email: string;
    id : string; 

    constructor(private router : Router) {
      
    }

    addAuthor(file) {
        let author = new Author(parseInt(this.id), this.name, this.email, this.name + ".jpg");
        Author.getAuthors().push(author);
        alert("Added New Author Successfully!");
    }

    cancel() {
       this.router.navigate(['/list']);
    }


}
