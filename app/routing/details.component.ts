import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
    index: number;
    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.index = params["index"];
            // get details of book with index in this.index 
        });
    }

    delete() {
        if (confirm('Do you really want to delete this book?')) {
               // delete
               this.router.navigate(['/list']);
        }
    }


}