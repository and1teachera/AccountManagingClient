import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  email: string;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.email = params['email'];
      });
  }

  ngOnInit(): void {
    this.userService.getUserByEmail(this.email).then(user => {
      this.user = user;
    });
  }

}
