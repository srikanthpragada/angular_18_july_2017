import { Component } from '@angular/core';

@Component({
  selector: 'st-demo',
  templateUrl: './event-bind.component.html'
})
export class EventBindComponent {
    currentClasses = {"special" : true, "big" : false};

    names = ["abc", "pqr", "xyz"];
}
