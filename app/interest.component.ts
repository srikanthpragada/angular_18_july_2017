import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-interest',
  templateUrl: './interest.component.html'
})
export class InterestComponent implements OnInit {
  interest : number;
  amount : number;
  rate : number;

  ngOnInit() {
        // code 
  }

  calculate(amount : number, rate : number, isRound : boolean) 
  {
      this.amount  = amount;
      this.rate = rate;
      this.interest = this.amount * this.rate / 100;
      if (isRound)
       this.interest = Math.round(this.interest);
  }
 

  round(isRound : boolean) {
      this.interest = this.amount * this.rate / 100;
      if (isRound)
       this.interest = Math.round(this.interest);
  }

}
