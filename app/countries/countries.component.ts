import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Country } from './country';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';

@Component({
  selector: 'st-countries',
  templateUrl: 'countries.component.html'

})
export class CountriesComponent {
   countries : Country[] ;
   visibleCountries : Country[];
   sortBy : string = "n";

   constructor(private http : Http) {
       // this.countries = [];
   }

   sort(order?:string) {
       if(order) {
           this.sortBy = order;
       }
       switch(this.sortBy) {
           case "n" : this.countries.sort( (a,b) => a.name.localeCompare(b.name));
                      break;
           case "p" : this.countries.sort( (a,b) => a.population - b.population);
                      break;        
       }
   }

   search(name : string) {
        this.http.get("https://restcountries.eu/rest/v2/name/" + name)
           .map(resp => { return  <Country[]> resp.json(); } )
           .subscribe( resp => {
               this.countries = <Country[]> resp;
           });

   }

}
