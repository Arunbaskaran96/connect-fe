import { Component, DestroyRef, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserNameValidator } from '../../directives/username-validation.directive';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from '../../services/toastr.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  imports: [RouterLink, MatCard, FormsModule, UserNameValidator],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly _authService = inject(AuthService);

  private readonly _toastrService = inject(ToastrService);

  private readonly _router = inject(Router);

  private _destroyRef = inject(DestroyRef);

  private _activatedRoute = inject(ActivatedRoute);

  handleSubmit(form: NgForm): void {
    this._authService
      .login(form.value)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        complete: () => {
          this._router.navigate(['/home']);
        },
        error: (data) => {
          this._toastrService.showToastr(data.error.message, 'X', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        },
      });
  }

  forgotPassword() {
    this._toastrService.showToastr('Forgot Password', 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
