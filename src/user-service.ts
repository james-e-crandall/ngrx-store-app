import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(): string[] {
    return ['Alice', 'Bob', 'Charlie'];
  }
}
