import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TaskLayoutComponent} from "./tasks/task-layout.component";

const routes = [
  {path: '', component: TaskLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
