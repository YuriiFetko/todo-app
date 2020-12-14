import {Component, OnInit} from '@angular/core';
import {Task} from '../shared/task.model';
import {TaskService} from '../shared/task.service';
import {tasks} from "../shared/mock-tasks";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService: TaskService) {
  }

  public tasks: Task[];

  ngOnInit(): void {
    this.tasks = this.taskService.getTask();
    console.log(this.tasks)
  }

  deleteTask() {
    // this.taskService.deleteTask()

    this.tasks.map(x => {
      if (x.completed) {
        this.tasks = this.tasks.slice(1)
        console.log(this.tasks)
      }
    })
    console.log(this.tasks)
  }

}
