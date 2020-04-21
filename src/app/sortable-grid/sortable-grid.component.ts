import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sortable-grid',
  templateUrl: './sortable-grid.component.html',
  styleUrls: ['./sortable-grid.component.css'],
})
export class SortableGridComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private selectedRow;

  columnDefs = [
    {headerName: 'First name', field: 'firstName'},
    {headerName: 'Last name', field: 'lastName'},
    {headerName: 'Email', field: 'email'},
    {headerName: 'Birth Date', field: 'birthDate'}
  ];
  rowData = [];
  rowSelection;

  constructor(private userService: UserService,
              private router: Router) {
    this.rowSelection = 'single';
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.rowData = users;
      this.selectedRow = this.rowData[0];
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onRowClickedEvent() {
    // this.openDialog();
    this.selectedRow = this.gridApi.getSelectedRows()[0];
    console.log(this.selectedRow);
  }

  onRowDoubleClickedEvent() {
    if (this.gridApi.getSelectedRows().length > 0) {
      this.selectedRow = this.gridApi.getSelectedRows()[0];
      const email = this.selectedRow.email;
      this.router.navigate(['user'], {queryParams: {email}});
    }
  }
  addUser() {
    this.router.navigate(['add-user']);
  }
}
