import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BracketsPipe } from 'app/directives/brackets.pipe';

import { ReactiveLoginComponent } from 'app/forms/reactive-login.component';

import { PipesDemoComponent } from 'app/directives/pipesdemo.component';

@NgModule({
  declarations: [
      ReactiveLoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ ReactiveLoginComponent ]
})
export class AppModule { }
