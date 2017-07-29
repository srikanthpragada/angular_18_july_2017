import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';  

import { RouterModule, Routes} from '@angular/router';  

import { FormsModule } from '@angular/forms';
import { MainComponent } from 'app/routing/main.component';
import { ListComponent } from 'app/routing/list.component';
import { AddComponent } from 'app/routing/add.component';

 
const appRoutes : Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: '',  component : ListComponent, pathMatch : 'full'}
];


@NgModule({
  declarations: [
        MainComponent, ListComponent, AddComponent
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