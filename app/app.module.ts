import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';  
import { RouterModule, Routes} from '@angular/router';  
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'app/app.component';
import { InterestComponent } from 'app/interest.component';
import { CourseComponent } from 'app/course.component';
import { BracketsPipe } from 'app/pipes/brackets.pipe';
import { MainComponent } from 'app/routing/main.component';
import { ListComponent } from 'app/routing/list.component';
import { AddComponent } from 'app/routing/add.component';
import { DetailsComponent } from 'app/routing/details.component';
import { InterestFormComponent } from 'app/interestForm.component';
import { PipesDemoComponent } from 'app/pipes/pipesdemo.component';
import { CountriesComponent } from 'app/http/countries/countries.component';
import { CountryDetailsComponent } from 'app/http/countries/country-details.component';
 
const appRoutes : Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'details/:index', component: DetailsComponent },
  { path: '',  component : ListComponent, pathMatch : 'full'},
  { path: '**',  component : ListComponent}
];


@NgModule({
  declarations: [
        MainComponent, ListComponent, AddComponent, DetailsComponent,
        AppComponent,InterestComponent, InterestFormComponent,
        CourseComponent, BracketsPipe, PipesDemoComponent,
        CountriesComponent, CountryDetailsComponent

  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
            RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {

   
}