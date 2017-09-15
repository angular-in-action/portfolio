import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  get(key: string, fallback: any) {
    let value = localStorage.getItem(key);
    return (value) ? JSON.parse(value) : fallback;
  }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
