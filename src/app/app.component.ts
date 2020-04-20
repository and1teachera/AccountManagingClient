import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  columnDefs = [
    {headerName: 'First name', field: 'firstName'},
    {headerName: 'Last name', field: 'lastName'},
    {headerName: 'Email', field: 'email'},
    {headerName: 'Birth Date', field: 'birthDate'}
  ];

  rowData = [];

  ngOnInit() {
    fetch('http://localhost:8080/api/users')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
  }

  onRowClickedEvent($event: any) {
    // this.openDialog();
  }
}
