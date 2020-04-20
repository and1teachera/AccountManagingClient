import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgGridModule} from 'ag-grid-angular';
import { SortableGridComponent } from './sortable-grid/sortable-grid.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : 'users', component : SortableGridComponent},
  {path : 'PageNotFound', component : PageNotFoundComponent},
  {path : '**', redirectTo : '/PageNotFound'}
];

@NgModule({
  declarations: [
    AppComponent,
    SortableGridComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents(null),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
