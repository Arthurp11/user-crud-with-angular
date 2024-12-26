import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(user: User) : Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${user.id}`);
  }

  update(user: User) : Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  create(user: User) : Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }

  delete(user: User) : Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${user.id}`);
  }
}
