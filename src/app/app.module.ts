import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TaskListComponent} from './tasks/task-list/task-list.component';
import {TaskComponent} from './tasks/task-list/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
