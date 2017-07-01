import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventBindComponent } from 'app/directives/event-bind.component';

@NgModule({
  declarations: [
    EventBindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ EventBindComponent]
})
export class AppModule { }
