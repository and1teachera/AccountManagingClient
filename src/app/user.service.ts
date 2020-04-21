import { Injectable } from '@angular/core';
import {User} from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return fetch('http://localhost:8080/api/users')
      .then(result => result.json())
      .then(rowData => rowData);
  }

  getUserByEmail(email: any) {
    return fetch('http://localhost:8080/api/users/' + email)
      .then(result => result.json())
      .then(rowData => rowData);
  }
}
