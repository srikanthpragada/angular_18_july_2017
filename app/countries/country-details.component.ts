import { Component,Input} from '@angular/core';
import { Country } from './Country';
 
@Component({
  selector: 'country-details',
  templateUrl: 'country-details.component.html'

})
export class CountryDetailsComponent   {
   @Input() country : Country;
    
}
