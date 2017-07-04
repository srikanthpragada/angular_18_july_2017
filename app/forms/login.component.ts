import { Component } from '@angular/core';

@Component({
  selector: 'st-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
   username : string;
   password : string;

   login() {
     console.log("Username : " + this.username);
     console.log("Password : " + this.password);
   }
   

}
