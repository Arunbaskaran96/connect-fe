import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  private readonly _toastr = inject(MatSnackBar);

  constructor() {}

  showToastr(message: string, action: string, config?: MatSnackBarConfig<any>) {
    this._toastr.open(message, action, config);
  }
  closeToastr() {}
}
