import { FormControl, FormGroup } from '@angular/forms';

export class PasswordValidator {
  static mustHaveStar(formControl: FormControl) {
    // do not validate if value is missing 
    if (formControl.value.length == 0)
      return null;

    if (formControl.value.indexOf('*') < 0)  // star not found
      return { mustHaveStar: true };

    return null;
  }

  static checkMismatch(formGroup : FormGroup) {
    // console.log(formGroup);
    if (formGroup.get("username").value === formGroup.get("password").value)
         return { misMatch : true};
    else
         return null;
  }
}


