import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'st-login',
  templateUrl: 'reactive-login.component.html'
})
export class ReactiveLoginComponent {
    username : FormControl;
    password : FormControl;
    loginForm : FormGroup;
    
    // FormControl validator 
    mustHaveStar(control : FormControl) 
    {
       if (control.value.indexOf("*") >= 0)
         return null;  // valid 
       else
         return { mustHaveStar : true}; // invalid 
    }
    // FormGroup validator 
    matchValidator(g : FormGroup) {
      
      if (g.get('username').value != g.get('password').value)
         return null;
       else
         return  { match : true };
    }

    ngOnInit() { 
       this.username = new FormControl("", 
                    [Validators.required, Validators.pattern("[a-zA-Z]+")]) ;
       this.password = new FormControl("",
                    [Validators.required, this.mustHaveStar]);

       this.loginForm = new FormGroup(
         { 
            username : this.username,
            password : this.password
         },
         this.matchValidator
       );
    }

   login() {
       console.log( this.username.value);
       console.log( this.password.value);
       console.log( this.loginForm);

   }
   

}
