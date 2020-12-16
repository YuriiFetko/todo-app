import {Component, OnInit} from '@angular/core';
import {Task} from '../shared/task.model';
import {TaskService} from '../shared/task.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {tasks} from '../shared/mock-tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService: TaskService) {
  }

  public form: FormGroup;
  public tasks: Task[];

  ngOnInit(): void {
    this.tasks = this.taskService.getTask();

    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.pattern('.*(\\S(\\s+)?){3,}')])
    });
  }

  addTask(): void {
    if (this.form.invalid) {
      return;
    }
    const task: Task = {
      id: this.getLastIdTask(),
      title: this.form.value.title,
      completed: false
    };
    this.tasks.push(task);
    this.form.reset();
  }

  getLastIdTask(): number {
    if (this.tasks.length === 0) {
      return 1;
    } else {
      return (
        Math.max.apply(
          Math, this.tasks.map((task) => task.id)
        ) + 1
      );
    }
  }

  deleteTask(): void {
    this.tasks = this.tasks.filter((todo) => todo.completed === false);
  }

  toggleDoneTask(task): void {
    task.completed = !task.completed;
  }
}
