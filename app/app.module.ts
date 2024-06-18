import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableDataComponent } from './table-data/table-data.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
