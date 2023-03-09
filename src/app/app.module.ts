import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DayCalComponent } from './day-cal/day-cal.component';
import { TodoCardComponent } from './todo-card/todo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DayCalComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
