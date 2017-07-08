export class Author {
    constructor(public id: number, public name: string, public email: string, public imageUrl: string) { }
    
    static authors : Author[] = 
     [ new Author(1, "Herbert Schildt", "herbert@gmail.com", "herbert.jpg"),
       new Author(2, "Stephen Walther", "stephen@msn.com", "walther.jpg"),
       new Author(3, "Srikanth Pragada", "srikanthpragada@gmail.com", "srikanth.jpg")];

    public static getAuthors(): Author[] {
         return Author.authors;
    } 
}