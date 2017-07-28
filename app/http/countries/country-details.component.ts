import { Component,Input} from '@angular/core';
import { Http } from '@angular/http';
import { Country } from './Country';
 
@Component({
  selector: 'country-details',
  templateUrl: 'country-details.component.html'

})
export class CountryDetailsComponent   {
   @Input() country : Country;
    
}
