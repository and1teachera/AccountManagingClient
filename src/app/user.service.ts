import {Injectable} from '@angular/core';
import {User} from './model/User';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<Array<User>>(environment.restUrl)
      .pipe(
        map(data => {
          const rooms = new Array<User>();
          for (const room of data) {
            rooms.push(User.fromHttp(room));
          }
          return rooms;
        })
      );
  }

  getUserByEmail(email: any) {
    return this.http.get<User>(environment.restUrl + email)
      .pipe(
        map(data => {
          return data;
        }));
  }


  deleteUser(email: string): Observable<any> {
    return this.http.delete(environment.restUrl + email);
  }

  createUser(user: User): Observable<User> {
    const fullUser = {
      firstName: user.firstName, lastName: user.lastName,
      birthDate: user.birthDate.toISOString().slice(0, 10), email: user.email
    };
    return this.http.post<User>(environment.restUrl, fullUser).pipe(retry(1),
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
      'Error occur; please try again later.');
  }
}
