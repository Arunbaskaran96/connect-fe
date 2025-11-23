import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  setValueToLocalStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  getValueFromLocalStorage(key: string) {
    localStorage.getItem(key);
  }

  deleteItemFromLocalStroage(key: string) {
    localStorage.removeItem(key);
  }
}
