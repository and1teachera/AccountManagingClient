import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgGridModule} from 'ag-grid-angular';
import { SortableGridComponent } from './sortable-grid/sortable-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SortableGridComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents(null)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
