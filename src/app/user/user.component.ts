import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../model/User';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;
  email: string;

  @Output()
  dataChangedEvent = new EventEmitter();

  message = '';

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.email = params['email'];
      });
  }

  ngOnInit(): void {
    this.userService.getUserByEmail(this.email).subscribe(user => {
      this.user = user;
    });
  }

  deleteUser() {
    const result = confirm('Are you sure you wish to delete this user?');
    if (result) {
      this.message = 'deleting...';
      this.userService.deleteUser(this.user.email).subscribe(
        next => {
          this.dataChangedEvent.emit();
          this.router.navigate(['']);
        }, error => this.message = 'Sorry, this user cannot be deleted at this time.'
      );
    }
  }
}
