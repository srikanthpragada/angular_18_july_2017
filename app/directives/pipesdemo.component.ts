import { Component } from '@angular/core';

@Component({
  selector: 'st-pipes',
  templateUrl: './pipesdemo.component.html'
})
export class PipesDemoComponent {
  amount :number;
  today : Date;
  address  = { "dno" : "393-3-3", "street" : "Dwk"};

  constructor() {
      this.amount = 1002022;
      this.today = new Date(); 
  }



}
