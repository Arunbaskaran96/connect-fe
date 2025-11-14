import { Directive, forwardRef } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Directive({
  selector: '[userNameValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UserNameValidator),
      multi: true,
    },
  ],
})
export class UserNameValidator implements Validators {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return { error: 'Email is required' };
    } else {
      const regex = new RegExp(
        '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'
      );
      if (regex.test(control.value)) return null;
      return { error: 'Please Enter Valid Email' };
    }
  }
}
