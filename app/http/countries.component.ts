import { Component } from '@angular/core';
import { Country } from './country';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
    selector: 'st-countries',
    templateUrl: 'countries.component.html'
})
export class CountriesComponent {
    countries : Country[];
 
    constructor(private http: Http) {

    }
    
    ngOnInit() {
        this.http.get("https://restcountries.eu/rest/v2/all")
           .map (resp => <Country[]> resp.json())
           .subscribe( result => this.countries = result);
    }
}