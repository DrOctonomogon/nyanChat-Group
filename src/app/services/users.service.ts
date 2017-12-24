import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {API_URL} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Credentials} from '../models/credentials.model';

@Injectable()
export class UsersService {

  private usersUrl = API_URL + '/users';

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


  constructor(private http: HttpClient) {}

  addUser(user: User): User {
    this.http.post(this.usersUrl, user, this.httpOptions);
    return user;
  }

//userName: string, password: string
  verifyUser(credentials: Credentials) {
    this.http.post(this.usersUrl,credentials, this.httpOptions);
  }



}
