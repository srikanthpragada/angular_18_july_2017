"use strict";
var Author = (function () {
    function Author(id, name, email, imageUrl) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.imageUrl = imageUrl;
    }
    Author.getAuthors = function () {
        return [
            new Author(1, "Herbert Schildt", "herbert@gmail.com", "herbert.jpg"),
            new Author(2, "Stephen Walther", "stephen@msn.com", "walther.jpg"),
            new Author(3, "Srikanth Pragada", "srikanthpragada@gmail.com", "srikanth.jpg")
        ];
    };
    return Author;
}());
exports.Author = Author;
//# sourceMappingURL=Author.js.map