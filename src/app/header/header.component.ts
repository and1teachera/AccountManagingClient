import {Component, OnInit} from '@angular/core';
import {AddUserComponent} from '../add-user/add-user.component';
import {MatDialog} from '@angular/material/dialog';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
  }

  openAddUserDialog() {
    this.router.navigate([''], {});
    this.dialog.open(AddUserComponent);
  }
}
