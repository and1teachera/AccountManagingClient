import { Component, OnInit } from '@angular/core';
import {AddUserComponent} from '../add-user/add-user.component';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
  }

  openAddUserDialog(){
      this.dialog.open(AddUserComponent);
  }
}
