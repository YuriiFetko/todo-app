import {Injectable} from '@angular/core';
import {Task} from './task.model';
import {tasks} from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTask(): Task[] {
    return tasks;
  }

  deleteTask(): Task[] {
    return tasks.filter(value => {
      return value.completed
    });
  }
}
