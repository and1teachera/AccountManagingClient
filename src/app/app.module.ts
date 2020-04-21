import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgGridModule} from 'ag-grid-angular';
import { SortableGridComponent } from './sortable-grid/sortable-grid.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {   MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {path : '', component : SortableGridComponent},
  {path : 'users', component : SortableGridComponent},
  {path : 'user', component : UserComponent},
  {path : 'add-user', component : AddUserComponent},
  {path : 'PageNotFound', component : PageNotFoundComponent},
  {path : '**', redirectTo : '/PageNotFound'}
];

@NgModule({
  declarations: [
    AppComponent,
    SortableGridComponent,
    PageNotFoundComponent,
    UserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents(null),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
