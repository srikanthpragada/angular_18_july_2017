"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Author_1 = require("./Author");
var router_1 = require("@angular/router");
var AuthorDetailsComponent = (function () {
    function AuthorDetailsComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    /*
      ngOnInit(): void {
        this.route.params.subscribe( params => {
          this.id =  params["id"];
          this.author = this.getAuthor(params["id"])
         });
      }
       
       */
    AuthorDetailsComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params["id"];
        this.author = this.getAuthor(this.id);
    };
    AuthorDetailsComponent.prototype.getAuthor = function (id) {
        // console.log("Route id : " + id);
        for (var _i = 0, _a = Author_1.Author.getAuthors(); _i < _a.length; _i++) {
            var a = _a[_i];
            if (a.id == id) {
                return a;
            }
        }
    };
    AuthorDetailsComponent.prototype.next = function () {
        console.log("About to go to next author");
        this.router.navigate(['details', +this.id + 1])
            .catch(function (error) { return console.log(error); })
            .then(function (e) { return console.log("Next Done " + e); });
        // this.router.navigate( ["list"]);
    };
    AuthorDetailsComponent.prototype.back = function () {
        this.router.navigate(['list']);
    };
    return AuthorDetailsComponent;
}());
AuthorDetailsComponent = __decorate([
    core_1.Component({
        selector: 'author-details',
        templateUrl: 'app/routing/author-details.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], AuthorDetailsComponent);
exports.AuthorDetailsComponent = AuthorDetailsComponent;
//# sourceMappingURL=author-details.component.js.map