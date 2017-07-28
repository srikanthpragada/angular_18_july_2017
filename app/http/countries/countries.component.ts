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

       console.log("Sorting by " + this.sortBy);
       console.log(this);
       switch(this.sortBy) {
           case "n" : this.visibleCountries = this.countries.sort( (a,b) => a.name.localeCompare(b.name));
                      break;
           case "p" : this.visibleCountries = this.countries.sort( (a,b) => a.area - b.area);
                     
                      console.log(this.visibleCountries);
                      break;        
       }
   }

   search(name : string) {
        console.log(this.countries);
        this.http.get("https://restcountries.eu/rest/v2/name/" + name)
           .map(resp => { return  <Country[]> resp.json(); } )
           .subscribe( resp => {
               this.countries = <Country[]> resp;
               this.sort()
           });

   }

}
