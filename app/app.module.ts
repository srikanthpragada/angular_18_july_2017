import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BracketsPipe } from 'app/directives/brackets.pipe';

import { LoginComponent } from 'app/forms/login.component';

import { PipesDemoComponent } from 'app/directives/pipesdemo.component';

@NgModule({
  declarations: [
      LoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [ LoginComponent ]
})
export class AppModule { }
