import { Component } from '@angular/core';
import { User } from './User';
@Component({
  selector: 'st-login',
  templateUrl : 'login.component.html'
})
export class LoginComponent  {
      
     username : string = "";
     password : string = "";

     constructor()
     {
          
     }
    
     onSubmit() 
     {
         console.log(this.username);
         console.log(this.password);
     }
}