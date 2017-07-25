import  { Injectable }  from "@angular/core"
import  { Book }  from "./book"


@Injectable()
export class BooksService 
{
  books : Book[] = 
    [
            { id : 1, title : "Angular 2", author : "Danny", price : 450},
            { id : 2, title : "Angular Getting Started", author : "John Papa", price : 550},
            { id : 3, title : "Learn TypeScript", author : "Anders", price : 350}
    ];

   getBooks() : Book[] 
   { 
       return this.books;  
   }

   getBook(id : number) : Book 
   { 
       for(let b of this.books)
       {
           if ( b.id == id)
              return b;
       }
       return null; 
   }

}