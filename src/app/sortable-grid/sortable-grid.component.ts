import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-sortable-grid',
  templateUrl: './sortable-grid.component.html',
  styleUrls: ['./sortable-grid.component.css'],
})
export class SortableGridComponent implements OnInit {

  private userService: UserService;
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

  constructor(userService: UserService) {
    this.userService = userService;
    this.rowSelection = 'single';
  }

  ngOnInit() {
    this.userService.getUsers().then(users => {
      this.rowData = users;
      this.selectedRow = this.rowData[0];
    });
  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onRowClickedEvent($event: any) {
    // this.openDialog();
    this.selectedRow = this.gridApi.getSelectedRows()[0];
    console.log(this.selectedRow);
  }

}
