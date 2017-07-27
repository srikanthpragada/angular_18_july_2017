import { Component } from '@angular/core';
import { PasswordValidator } from './PasswordValidator';
import { FormControl, FormGroup, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'st-login',
  templateUrl: './reactive-login.component.html'
})
export class ReactiveLoginComponent {

  loginForm: FormGroup;
  isSubmitted: boolean = false;

  // validatePassword(control : FormControl) {
  //     if (control.value.indexOf("*") >= 0)
  //       return null;  // valid 
  //     else
  //       return { mustHaveStar : true , value : control.value }; // invalid 
  // }

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group(
      {
        username: ["", [Validators.required, Validators.minLength(4)]],
        password: ["", [Validators.required, PasswordValidator.mustHaveStar]]
      },
      { validator : PasswordValidator.checkMismatch}  // validators for FormGroup
    )
 }

  login() {
    this.isSubmitted = true;
    console.log(this.loginForm.get("username").value);
    console.log(this.loginForm.get("password").value);
  }
}

