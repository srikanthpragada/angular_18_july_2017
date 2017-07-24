import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseComponent} from "app/course.component";
import { InterestComponent} from "app/interest.component";
import { InterestFormComponent} from "app/interestForm.component";
import { PipesDemoComponent} from "app/pipes/pipesdemo.component";
import { BracketsPipe} from "app/pipes/brackets.pipe";

@NgModule({
  declarations: [
          InterestFormComponent,PipesDemoComponent, BracketsPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ PipesDemoComponent ]
})
export class AppModule {

   
}
