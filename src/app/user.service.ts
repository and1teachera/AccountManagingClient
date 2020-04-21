import { Injectable } from '@angular/core';
import {User} from './model/User';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

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


  deleteUser(email: string): Observable<any> {
    return this.http.delete('http://localhost:8080/api/users/' + email);
  }

  createUser(user: User): Observable<User> {
    const fullUser = {firstName: user.firstName, lastName: user.lastName,
      birthDate: user.birthDate, email: user.email};
    return this.http.post<User>('http://localhost:8080/api/users/', fullUser).pipe(retry(1),
      catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      alert('An error occurred:' + error.error.message);
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      alert('An error occurred:' + error.error.details);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
