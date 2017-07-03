import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InterestComponent } from 'app/directives/interest.component';
import { EventBindComponent } from 'app/directives/event-bind.component';

import { BracketsPipe } from 'app/directives/brackets.pipe';

import { PipesDemoComponent } from 'app/directives/pipesdemo.component';

@NgModule({
  declarations: [
      EventBindComponent, 
      InterestComponent,
      PipesDemoComponent,
      BracketsPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ PipesDemoComponent ]
})
export class AppModule { }
