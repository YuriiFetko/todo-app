import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TaskListComponent} from './tasks/task-list/task-list.component';
import {TaskComponent} from './tasks/task-list/task/task.component';
import { HeaderComponent } from './tasks/header/header.component';
import { TaskLayoutComponent } from './tasks/task-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    HeaderComponent,
    TaskLayoutComponent
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
