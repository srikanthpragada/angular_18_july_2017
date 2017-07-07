import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'authors-menu',
  templateUrl: 'menu.component.html'
})
export class MenuComponent  { 
   constructor(private router : Router) {
   }
   search(id : string) {
         this.router.navigate(['/details', id]);
   }
 }
