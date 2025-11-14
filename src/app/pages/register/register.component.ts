import { NgIf } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MatCardModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private readonly _formBuilder = inject(FormBuilder);

  private readonly _authService = inject(AuthService);

  public registerForm: FormGroup;

  constructor() {
    this.registerForm = this._formBuilder.group(
      {
        firstName: ['', [this.validateName()]],
        lastName: ['', [this.validateName()]],
        email: ['', [this.validateEmail()]],
        password: ['', [this.validatePassword()]],
        conformPassword: ['', this.validatePassword()],
      },
      { validators: [this.comparePassword()] }
    );
  }

  onFormSubmit() {
    const { conformPassword, ...user } = this.registerForm.value;
    this._authService.register(user);
  }

  validateEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = new RegExp(
        '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'
      );
      if (regex.test(control.value)) return null;
      return { error: 'Please enter valid email' };
    };
  }

  validateName(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length > 6) return null;
      if (control.value.length === 0) return { error: 'Field is Required' };
      else {
        return { error: 'Should contains atleast six characters' };
      }
    };
  }

  validatePassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length >= 8) return null;
      else {
        return { error: 'Password Should contain minimum 8 characters' };
      }
    };
  }

  comparePassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password');
      const conformPassword = control.get('conformPassword');
      if (password?.value === conformPassword?.value) return null;
      else {
        return { error: 'Password Should match' };
      }
    };
  }

  getErrorMessage(name: string): string {
    return this.registerForm.get(name)?.errors?.['error'];
  }

  isInputValid(name: string): boolean {
    return (
      !this.registerForm.get(name)?.valid &&
      this.registerForm.get(name)?.touched &&
      this.registerForm.get(name)?.errors?.['error']
    );
  }
}
