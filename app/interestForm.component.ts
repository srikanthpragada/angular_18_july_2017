import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-interest',
  templateUrl: './interestForm.component.html'
})
export class InterestFormComponent {
  interest : number;
  amount : number;
  rate : number;
  isRound : boolean = false; 

  calculate() 
  {
      this.interest = this.amount * this.rate / 100;
      console.log(this.isRound);
      if (this.isRound)
       this.interest = Math.round(this.interest);
  }
 
  reset() {
    this.amount = 0;
    this.rate = 0;
    this.interest = 0; 
    this.isRound = false; 
  }

  round() {
      this.isRound = !this.isRound;
      this.calculate();
  }

}
