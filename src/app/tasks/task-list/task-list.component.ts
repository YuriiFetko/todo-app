import {Component, OnInit} from '@angular/core';
import {Task} from '../shared/task.model';
import {TaskService} from '../shared/task.service';

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
  }

}
