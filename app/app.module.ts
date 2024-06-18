import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MouseWatcherDirective } from './mouse-watcher.directive';
import { TextWithDelayDirective } from './text-with-delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    MouseWatcherDirective,
    TextWithDelayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
