import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../shared/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  constructor() {
  }

  @Input() task: Task;

  ngOnInit(): void {
  }

}
