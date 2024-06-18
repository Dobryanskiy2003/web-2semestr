import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { IncrementComponent } from './increment/increment.component';
import { DecrementComponent } from './decrement/decrement.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    IncrementComponent,
    DecrementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
