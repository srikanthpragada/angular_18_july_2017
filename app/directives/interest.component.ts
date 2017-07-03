import { Component } from '@angular/core';

@Component({
  selector: 'st-interest',
  templateUrl: './interest.component.html'
})
export class InterestComponent {
  amount :number;
  rate : number;
  interest : number;

  calculate() 
  {
      this.interest = this.amount * this.rate / 100;
  }

  reset() {
      this.amount =0;
      this.rate = 0;
      this.interest = 0;
  }

}
