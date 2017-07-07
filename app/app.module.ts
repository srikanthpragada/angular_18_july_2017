import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; 
import { HttpModule} from '@angular/http'; 

import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from 'app/countries/countries.component';
import { CountryDetailsComponent} from 'app/countries/country-details.component';


import { AuthorsListComponent } from 'app/authors/authors-list.component';
import { AuthorDetailsComponent } from 'app/authors/author-details.component';
import { MenuComponent } from 'app/authors/menu.component';


import { MainComponent } from 'app/authors/main.component';
import { AddAuthorComponent } from 'app/authors/add-author.component';
import { DeleteAuthorComponent } from 'app/authors/delete-author.component';
  
const appRoutes : Routes = [
  { path: 'add', component: AddAuthorComponent },
  { path: 'list', component: AuthorsListComponent },
  { path: 'delete/:id', component: DeleteAuthorComponent },
  { path: 'details/:id', component:  AuthorDetailsComponent },
  { path: '',  redirectTo : "/list", pathMatch : 'full' },
  { path: '**',  redirectTo : "/list", pathMatch : 'full' }
];


@NgModule({
  declarations: [
      AuthorsListComponent,
      AuthorDetailsComponent,
      MenuComponent, 
      AddAuthorComponent,
      MainComponent,
      DeleteAuthorComponent,
      CountryDetailsComponent,
      CountriesComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule,  
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ MainComponent, MenuComponent]
})
export class AppModule {

   
 }
