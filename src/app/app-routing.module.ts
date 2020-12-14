import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TaskListComponent} from './tasks/task-list/task-list.component';

const routes = [
  {path: '', component: TaskListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
