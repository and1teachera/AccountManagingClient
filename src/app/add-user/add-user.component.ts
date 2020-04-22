import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../model/User';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {MessageComponent} from '../message/message.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  message: string;
  user: User;
  firstNameIsValid = false;
  lastNameIsValid = false;
  emailIsValid = false;
  birthDateIsValid = false;
  constructor(private userService: UserService, private router: Router, private dialogRef: MatDialogRef<MessageComponent>) { }

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit() {
    this.message = 'saving...';
    this.userService.createUser(this.user).subscribe(
        (user) => {
          this.router.navigate(['users']);
          this.dialogRef.close();
        },
        error => this.message = 'Something went wrong and the data wasn\'t saved. You may want to try again.'
      );
    }

  checkIfLastNameIsValid() {
    if (this.user.lastName) {
      this.lastNameIsValid = this.user.lastName.trim().length > 0;
    } else {
      this.lastNameIsValid = false;
    }
  }

  checkIfFirstNameIsValid() {
    if (this.user.firstName) {
      this.firstNameIsValid = this.user.firstName.trim().length > 0;
    } else {
      this.firstNameIsValid = false;
    }
  }

  checkIfEmailIsValid() {
    if (this.user.email) {
      const regexp = new RegExp('[^@]+@[^\\.]+\\..+');
      this.emailIsValid = regexp.test(this.user.email);
    } else {
      this.emailIsValid = false;
    }
  }

  checkIfBirthDateIsValid() {
    if (this.user.birthDate) {
      const regexp = new RegExp('\\d{1,2}[/]\\d{1,2}[/]\\d{4}');
      this.birthDateIsValid = regexp.test(this.user.birthDate.toString());
    } else {
      this.birthDateIsValid = false;
    }
  }
}
