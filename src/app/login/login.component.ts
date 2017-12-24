import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {Credentials} from '../models/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() userName: string;

  @Input() password: string;

  constructor(private userService: UsersService) {}

  login(userName: string, password: string) {
    let credentials: Credentials = new Credentials(userName, password);
    console.log(credentials);
    this.userService.verifyUser(credentials);
  }

  ngOnInit() {
  }

}
